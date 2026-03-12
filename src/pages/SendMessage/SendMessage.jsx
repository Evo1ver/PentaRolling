import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Input from "../../components/common/Input/Input";
import Avatar from "../../components/common/Avatar/Avatar";
import AvatarSelector from "../../components/common/Avatar/AvatarSelector";
import { Dropdown } from "../../components/common/Dropdown/Dropdown";
import Textarea from "../../components/common/Textarea/Textarea";
import { Button } from "../../components/common/Button/Button";

import useMessageForm from "../../hooks/useMessageForm";
import FONTS from "../../constants/fonts";
import RELATIONS from "../../constants/relations";

import * as S from "./SendMessageStyle";

const ProfileAvatar = styled(Avatar)`
  flex-shrink: 0;
`;

const SendMessage = () => {
  const { recipientId } = useParams();
  const navigate = useNavigate();
  // 생성된 롤링페이퍼 페이지 구현 후 수정 예정입니다
  const handleSuccess = () => navigate(`/recipients/${recipientId}`);

  // 모바일: small(40px), 태블릿 이상: medium(56px)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
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
  } = useMessageForm(recipientId, handleSuccess);

  return (
    <S.PageWrapper $backgroundColor={backgroundColor}>
      <S.FormContainer>
        <S.Section>
          <Input
            formType="from"
            value={form.from}
            error={errors.from}
            onChange={handleFromChange}
            onBlur={handleFromBlur}
          />
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로필 이미지</S.SectionTitle>
          <S.ProfileImageRow>
            <ProfileAvatar src={form.profileImage} size="large" />
            <S.AvatarSelectorWrapper>
              <S.SelectorGuide>프로필 이미지를 선택해주세요!</S.SelectorGuide>
              {isLoadingImages ? (
                <S.LoadingText>이미지 불러오는 중...</S.LoadingText>
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
          <S.SectionTitle>상대와의 관계</S.SectionTitle>
          <Dropdown
            type={RELATIONS}
            value={form.relationship}
            onChange={handleRelationshipChange}
          />
        </S.Section>

        <S.Section>
          <S.SectionTitle>내용을 입력해 주세요</S.SectionTitle>
          <Textarea value={form.content} onChange={handleContentChange} />
        </S.Section>

        <S.Section>
          <S.SectionTitle>폰트 선택</S.SectionTitle>
          <Dropdown
            type={FONTS}
            value={form.font}
            onChange={handleFontChange}
          />
        </S.Section>
      </S.FormContainer>

      <S.SubmitBar>
        <Button
          variant="primary"
          size="large"
          state={isSubmitDisabled ? "disabled" : undefined}
          onClick={handleSubmit}
        >
          {isSubmitting ? "생성 중..." : "생성하기"}
        </Button>
      </S.SubmitBar>
    </S.PageWrapper>
  );
};

export default SendMessage;
