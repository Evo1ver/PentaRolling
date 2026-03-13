import { useState } from "react";
import { createMessage } from "../lib/api/message";
import useToast from "./useToast";
import FONTS from "../constants/fonts";
import RELATIONS from "../constants/relations";

const DEFAULT_AVATAR_URL =
  "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png";

const INITIAL_FORM = {
  from: "",
  profileImage: DEFAULT_AVATAR_URL,
  relationship: RELATIONS[0].value,
  content: "",
  font: FONTS[0].value,
};

const getPlainText = (html) => {
  if (!html) return "";
  return new DOMParser()
    .parseFromString(html, "text/html")
    .body.textContent.trim();
};

/**
 * 메시지 작성 폼 상태·유효성·제출을 관리하는 훅
 * 외부 데이터(이미지 목록, 배경색)는 useRollingPaperData에서 가져와 props로 주입
 */
const useMessageForm = (recipientId, onSuccess) => {
  const { createToast } = useToast();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({ from: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── 핸들러 ──────────────────────────────────────────────────────────────
  const handleFromChange = (e) => {
    setForm((prev) => ({ ...prev, from: e.target.value }));
    if (errors.from) setErrors((prev) => ({ ...prev, from: false }));
  };

  const handleFromBlur = () => {
    setErrors((prev) => ({ ...prev, from: form.from.trim() === "" }));
  };

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

  // ── 유효성 ──────────────────────────────────────────────────────────────
  const isFromFilled = form.from.trim() !== "";
  const isContentFilled = getPlainText(form.content) !== "";
  const isSubmitDisabled = !isFromFilled || !isContentFilled || isSubmitting;

  // ── 제출 ────────────────────────────────────────────────────────────────
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
