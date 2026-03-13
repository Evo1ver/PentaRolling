import { useState, useEffect } from "react";
import { createMessage } from "../lib/api/message";
import { getProfileImages } from "../lib/api/image";
import { getRollingPaper } from "../lib/api/rollingPaper";
import useToast from "./useToast";
import FONTS from "../constants/fonts";
import RELATIONS from "../constants/relations";
import BACKGROUND_COLORS from "../constants/backgroundColors";

const DEFAULT_AVATAR_URL =
  "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png";

const BG_COLOR_MAP = Object.fromEntries(
  BACKGROUND_COLORS.map(({ label, color }) => [label, color]),
);

const INITIAL_FORM = {
  from: "",
  profileImage: DEFAULT_AVATAR_URL, // 기본 이미지 설정
  relationship: RELATIONS[0].value, // 기본값: "지인"
  content: "",
  font: FONTS[0].value, // 기본값: "Noto Sans"
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

  // 프로필 이미지 목록 fetch
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

  // 롤링페이퍼 배경색 fetch
  useEffect(() => {
    const fetchBackgroundColor = async () => {
      try {
        const data = await getRollingPaper(recipientId);
        setBackgroundColor(BG_COLOR_MAP[data.backgroundColor] ?? "#FFFFFF");
      } catch {
        setBackgroundColor("#FFFFFF");
      }
    };
    fetchBackgroundColor();
  }, [recipientId]);

  // 핸들러

  const handleFromChange = (e) => {
    setForm((prev) => ({ ...prev, from: e.target.value }));
    if (errors.from) {
      setErrors((prev) => ({ ...prev, from: false }));
    }
  };

  // focus out 시 빈 값이면 에러 표시
  const handleFromBlur = () => {
    setErrors((prev) => ({ ...prev, from: form.from.trim() === "" }));
  };

  // 이미지 선택 시: 선택 안 하면 기본 이미지 유지
  const handleImageChange = (url) => {
    setForm((prev) => ({ ...prev, profileImage: url || DEFAULT_AVATAR_URL }));
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

  // 유효성

  // ReactQuill HTML에서 순수 텍스트 추출
  const getPlainText = (html) => {
    if (!html) return "";
    // DOMParser로 HTML 파싱 후 텍스트만 추출
    const text = new DOMParser()
      .parseFromString(html, "text/html")
      .body.textContent.trim();
    return text;
  };

  const isFromFilled = form.from.trim() !== "";
  const isContentFilled = getPlainText(form.content) !== "";

  // From과 content 모두 있을 때 활성화
  const isSubmitDisabled = !isFromFilled || !isContentFilled || isSubmitting;

  // 제출
  const handleSubmit = async () => {
    if (!isFromFilled) {
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
