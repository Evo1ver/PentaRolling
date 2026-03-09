import React, { useCallback, useState } from "react";
import ModalContext from "./ModalContext";
import { createPortal } from "react-dom";
import ModalLayout from "../components/ModalLayout/ModalLayout";

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState(null);

  const openModalLayout = useCallback((component) => {
    // JSX 형태인지 검사
    if (!React.isValidElement(component)) {
      throw new Error("openModalLayout: JSX가 전달되지 않았습니다.");
    }

    setIsOpen(true);
    setModalComponent(component);
  }, []);

  const closeModalLayout = useCallback(() => {
    setIsOpen(false);
    setModalComponent(null);
  }, []);

  return (
    <ModalContext value={{ isOpen, openModalLayout, closeModalLayout }}>
      {children}
      {isOpen &&
        createPortal(
          <ModalLayout closeModalLayout={closeModalLayout}>
            {modalComponent}
          </ModalLayout>,
          document.getElementById("modal-root"),
        )}
    </ModalContext>
  );
};

export default ModalContextProvider;
