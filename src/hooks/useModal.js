import { useContext } from "react";
import ModalContext from "../contexts/ModalContext";

/**
 * Modal Context를 반환하는 커스텀 훅
 *
 * @returns ModalContext
 */
const useModal = () => {
  const modalContext = useContext(ModalContext);
  const { isOpen, openModal, closeModal } = modalContext;

  if (!modalContext) {
    throw new Error("Modal Context를 찾을 수 없습니다");
  }

  return { isOpen, openModal, closeModal };
};

export default useModal;
