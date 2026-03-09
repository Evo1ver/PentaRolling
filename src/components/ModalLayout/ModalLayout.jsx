import * as S from "./ModalLayoutStyle";

/**
 * 모달 레이아웃 컴포넌트
 *
 * @param {React.ReactNode} children - 모달 내용
 * @param {function} closeModalLayout - 모달 닫기 함수
 * @returns {JSX.Element}
 */
const ModalLayout = ({ children, closeModalLayout }) => {
  return (
    <S.ModalBackground onClick={closeModalLayout}>
      <S.ModalLayout onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalLayout>
    </S.ModalBackground>
  );
};

export default ModalLayout;
