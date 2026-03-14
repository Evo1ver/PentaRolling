import React from "react";
import ModalLayout from "../ModalLayout/ModalLayout";
import Avatar from "../common/Avatar/Avatar";
import { Button } from "../common/Button/Button";
import RelationshipBadge from "../common/RelationshipBadge/RelationshipBadge";
import * as S from "./CardModalStyle";
import ReactQuill from "react-quill-new";

/**
 * @param {string} name 작성자 이름
 * @param {string} relationship 작성자와 주인과의 관계
 * @param {string} content 작성 내용
 * @param {string} createdDate yyyy-mm-dd 형식의 작성일
 * @param {string} profileImg 작성자 프로필 이미지
 * @param {string} fonts 폰트 (기본값: pretendard)
 * @param {function} onCloseModal 모달 닫기 함수
 * @returns
 */
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
        <ReactQuill
          value={content}
          readOnly
          theme="snow"
          modules={{
            toolbar: false,
          }}
          style={{ height: "240px", overflowY: "auto" }}
        />
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
