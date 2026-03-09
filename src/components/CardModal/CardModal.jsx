import React from "react";
import ModalLayout from "../ModalLayout/ModalLayout";
import Avatar from "../common/Avatar/Avatar";
import { Button } from "../common/Button/Button";
import RelationshipBadge from "../common/Badge/RelationshipBadge";
import * as S from "./CardModalStyle";

const CardModal = ({
  name,
  relationship,
  content,
  createdDate,
  profileImg,
  fonts = "pretendard",
  onCloseModal,
}) => {
  return (
    <ModalLayout closeModalLayout={onCloseModal}>
      <S.Layout $fonts={fonts}>
        <S.Header>
          <S.Left>
            <Avatar src={profileImg} />
            <S.Title>
              <div>
                From. <S.Name>{name}</S.Name>
              </div>
              <RelationshipBadge relationship={relationship} />
            </S.Title>
          </S.Left>
          <S.Date>{createdDate}</S.Date>
        </S.Header>
        <S.Content>{content}</S.Content>
        <S.Footer>
          <Button
            style={{ width: "120px" }}
            variant="primary"
            size="40"
            onClick={onCloseModal}
          >
            확인
          </Button>
        </S.Footer>
      </S.Layout>
    </ModalLayout>
  );
};

export default CardModal;
