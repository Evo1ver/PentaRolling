import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../components/common/Input/Input";
import Avatar from "../../components/common/Avatar/Avatar";
import AvatarSelector from "../../components/common/Avatar/AvatarSelector";
import { Dropdown } from "../../components/common/Dropdown/Dropdown";
import Textarea from "../../components/common/Textarea/Textarea";
import { Button } from "../../components/common/Button/Button";
import useRollingPaperData from "../../hooks/useRollingPaperData";
import FONTS from "../../constants/fonts";
import RELATIONS from "../../constants/relations";
import * as S from "../SendMessage/SendMessageStyle";
import useToast from "../../hooks/useToast";
import { getMessage, putMessage } from "../../lib/api/message";

// TODO: useMessageForm과 통합
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

const ProfileAvatar = styled(Avatar)`
  flex-shrink: 0;
`;

const useUpdateMessageForm = (recipientId, onSuccess, messageId) => {
  const { createToast } = useToast();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({ from: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!messageId) return;

    const fetchMessage = async () => {
      try {
        const data = await getMessage(messageId);
        setForm({
          from: data.sender,
          profileImage: data.profileImageURL,
          relationship: data.relationship,
          content: data.content,
          font: data.font,
        });
      } catch {
        createToast({ message: "메시지를 불러오는데 실패했습니다." });
      }
    };

    fetchMessage();
  }, [messageId, createToast]);

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
      await putMessage(messageId, {
        recipientId: recipientId,
        sender: form.from,
        relationship: form.relationship,
        content: form.content,
        font: form.font,
        profileImageURL: form.profileImage,
      });
      onSuccess?.();
    } catch {
      createToast({ message: "메시지 수정에 실패했어요. 다시 시도해 주세요." });
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

const UpdateMessage = () => {
  const { id: recipientId, messageId } = useParams();
  const navigate = useNavigate();
  const handleSuccess = () => navigate(`/post/${recipientId}`);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    profileImages,
    isLoadingImages,
    backgroundColor,
    backgroundImageURL,
  } = useRollingPaperData(recipientId);

  const {
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
  } = useUpdateMessageForm(recipientId, handleSuccess, messageId);

  return (
    <S.PageWrapper
      $backgroundColor={backgroundColor}
      $backgroundImageURL={backgroundImageURL}
    >
      <S.FormContainer $hasBackgroundImage={!!backgroundImageURL}>
        <S.Section>
          <Input
            formType="from"
            value={form.from}
            error={errors.from}
            onChange={handleFromChange}
            onBlur={handleFromBlur}
            hasBackgroundImage={!!backgroundImageURL}
          />
        </S.Section>

        <S.Section>
          <S.SectionTitle $hasBackgroundImage={!!backgroundImageURL}>
            프로필 이미지
          </S.SectionTitle>
          <S.ProfileImageRow>
            <ProfileAvatar src={form.profileImage} size="large" />
            <S.AvatarSelectorWrapper>
              <S.SelectorGuide $hasBackgroundImage={!!backgroundImageURL}>
                프로필 이미지를 선택해주세요!
              </S.SelectorGuide>
              {isLoadingImages ? (
                <S.LoadingText $hasBackgroundImage={!!backgroundImageURL}>
                  이미지 불러오는 중...
                </S.LoadingText>
              ) : (
                <AvatarSelector
                  profileImages={profileImages}
                  selectedImage={form.profileImage}
                  onImageChange={handleImageChange}
                  size={isMobile ? "small" : "medium"}
                />
              )}
            </S.AvatarSelectorWrapper>
          </S.ProfileImageRow>
        </S.Section>

        <S.Section>
          <S.SectionTitle $hasBackgroundImage={!!backgroundImageURL}>
            상대와의 관계
          </S.SectionTitle>
          <Dropdown
            type={RELATIONS}
            value={form.relationship}
            onChange={handleRelationshipChange}
          />
        </S.Section>

        <S.Section>
          <S.SectionTitle $hasBackgroundImage={!!backgroundImageURL}>
            내용을 입력해 주세요
          </S.SectionTitle>
          <Textarea value={form.content} onChange={handleContentChange} />
        </S.Section>

        <S.Section>
          <S.SectionTitle $hasBackgroundImage={!!backgroundImageURL}>
            폰트 선택
          </S.SectionTitle>
          <Dropdown
            type={FONTS}
            value={form.font}
            onChange={handleFontChange}
          />
        </S.Section>
      </S.FormContainer>

      <S.SubmitBar
        $backgroundColor={backgroundColor}
        $backgroundImageURL={backgroundImageURL}
      >
        <Button
          variant="primary"
          size="large"
          state={isSubmitDisabled ? "disabled" : undefined}
          onClick={handleSubmit}
        >
          {isSubmitting ? "수정 중..." : "수정하기"}
        </Button>
      </S.SubmitBar>
    </S.PageWrapper>
  );
};

export default UpdateMessage;
