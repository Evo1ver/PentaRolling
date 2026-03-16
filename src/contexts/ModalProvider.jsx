import React, { useCallback, useState } from "react";
import ModalContext from "./ModalContext";
import { createPortal } from "react-dom";
import ModalLayout from "../components/ModalLayout/ModalLayout";

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);

  const openModal = useCallback((component) => {
    // JSX 형태인지 검사
    if (!React.isValidElement(component)) {
      throw new Error("openModal: JSX가 전달되지 않았습니다.");
    }

    setIsOpen(true);
    setModalComponent(component);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalComponent(null);
  }, []);

  return (
    <ModalContext value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen &&
        createPortal(
          <ModalLayout closeModalLayout={closeModal}>
            {modalComponent}
          </ModalLayout>,
          document.getElementById("modal-root"),
        )}
    </ModalContext>
  );
};

export default ModalContextProvider;
