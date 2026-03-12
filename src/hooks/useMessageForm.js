import { useState, useEffect } from "react";
import { createMessage } from "../lib/api/message";
import { getProfileImages } from "../lib/api/image";
import { getRollingPaper } from "../lib/api/rollingPaper";
import useToast from "./useToast";

export const RELATIONSHIP_OPTIONS = [
  { id: 1, value: "지인" },
  { id: 2, value: "친구" },
  { id: 3, value: "동료" },
  { id: 4, value: "가족" },
];

export const FONT_OPTIONS = [
  { id: 1, value: "Noto Sans" },
  { id: 2, value: "Pretendard" },
  { id: 3, value: "나눔명조" },
  { id: 4, value: "나눔손글씨 손편지체" },
];

const BACKGROUND_COLOR_MAP = {
  beige: "#FAE4B2",
  purple: "#EDD1FF",
  blue: "#B1D0FF",
  green: "#D0F5C3",
};

const INITIAL_FORM = {
  from: "",
  profileImage: "",
  relationship: RELATIONSHIP_OPTIONS[0].value,
  content: "",
  font: FONT_OPTIONS[0].value,
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
          BACKGROUND_COLOR_MAP[data.backgroundColor] ?? "#FFFFFF",
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
