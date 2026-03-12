import styled from "styled-components";
import Avatar from "../../components/common/Avatar/Avatar";

const TABLET = "768px";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#FFFFFF"};
`;

export const FormContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 24px 20px 80px;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;

  @media (min-width: ${TABLET}) {
    padding: 40px 24px 80px;
    max-width: 860px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionTitle = styled.h2`
  font: var(--font-24-bold);
  color: var(--gray-900);
`;

export const ProfileImageRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (min-width: ${TABLET}) {
    align-items: center;
  }
`;

export const ProfileAvatar = styled(Avatar)`
  flex-shrink: 0;
`;

export const AvatarSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1;

  & > div {
    flex-wrap: wrap;
    gap: 2px;

    /* AvatarOption padding override */
    button {
      padding: 0;
    }

    @media (min-width: ${TABLET}) {
      flex-wrap: nowrap;
      gap: 5px;
    }
  }
`;

export const SelectorGuide = styled.p`
  font: var(--font-14-regular);
  color: var(--gray-500);
`;

export const LoadingText = styled.p`
  font: var(--font-14-regular);
  color: var(--gray-400);
`;

export const SubmitBar = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 20px;
  background-color: var(--white);
  border-top: 1px solid var(--gray-200);

  button {
    width: 100%;
    max-width: 720px;
    display: block;
    margin: 0 auto;
  }

  @media (min-width: ${TABLET}) {
    padding: 16px 24px;

    button {
      max-width: 860px;
    }
  }
`;
