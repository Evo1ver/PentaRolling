import { useState, useEffect } from "react";
import { createMessage } from "../lib/api/message";
import { getProfileImages } from "../lib/api/image";
import { getRollingPaper } from "../lib/api/rollingPaper";
import useToast from "./useToast";
import FONTS from "../constants/fonts";
import RELATIONS from "../constants/relations";

const BACKGROUND_COLOR_MAP = {
  //수정 예정입니다
  beige: "#FAE4B2",
  purple: "#EDD1FF",
  blue: "#B1D0FF",
  green: "#D0F5C3",
};

const INITIAL_FORM = {
  from: "",
  profileImage: "",
  relationship: RELATIONS[0].value,
  content: "",
  font: FONTS[0].value,
};

const INITIAL_ERRORS = {
  from: false,
};

const useMessageForm = (recipientId, onSuccess) => {
  const { createToast } = useToast();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileImages, setProfileImages] = useState([]);
  const [isLoadingImages, setIsLoadingImages] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  useEffect(() => {
    const fetchProfileImages = async () => {
      try {
        const images = await getProfileImages();
        setProfileImages(images);
      } catch {
        setProfileImages([]);
      } finally {
        setIsLoadingImages(false);
      }
    };

    fetchProfileImages();
  }, []);

  useEffect(() => {
    const fetchBackgroundColor = async () => {
      try {
        const data = await getRollingPaper(recipientId);
        setBackgroundColor(
          BACKGROUND_COLOR_MAP[data.backgroundColor] ?? "#FFFFFF"
        );
      } catch {
        setBackgroundColor("#FFFFFF");
      }
    };

    fetchBackgroundColor();
  }, [recipientId]);

  const handleFromChange = (e) => {
    setForm((prev) => ({ ...prev, from: e.target.value }));
    if (errors.from) {
      setErrors((prev) => ({ ...prev, from: false }));
    }
  };

  const handleFromBlur = () => {
    setErrors((prev) => ({ ...prev, from: form.from.trim() === "" }));
  };

  const handleImageChange = (url) => {
    setForm((prev) => ({ ...prev, profileImage: url }));
  };

  const handleRelationshipChange = (value) => {
    setForm((prev) => ({ ...prev, relationship: value }));
  };

  const handleContentChange = (value) => {
    setForm((prev) => ({ ...prev, content: value }));
  };

  const handleFontChange = (value) => {
    setForm((prev) => ({ ...prev, font: value }));
  };

  const isSubmitDisabled =
    form.from.trim() === "" ||
    new DOMParser()
      .parseFromString(form.content, "text/html")
      .body.textContent.trim() === "" ||
    isSubmitting;

  const handleSubmit = async () => {
    if (form.from.trim() === "") {
      setErrors((prev) => ({ ...prev, from: true }));
      return;
    }

    setIsSubmitting(true);
    try {
      await createMessage(recipientId, {
        sender: form.from,
        relationship: form.relationship,
        content: form.content,
        font: form.font,
        profileImageURL: form.profileImage,
      });
      onSuccess?.();
    } catch {
      createToast({ message: "메시지 생성에 실패했어요. 다시 시도해 주세요." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    errors,
    profileImages,
    isLoadingImages,
    backgroundColor,
    isSubmitting,
    isSubmitDisabled,
    handleFromChange,
    handleFromBlur,
    handleImageChange,
    handleRelationshipChange,
    handleContentChange,
    handleFontChange,
    handleSubmit,
  };
};

export default useMessageForm;