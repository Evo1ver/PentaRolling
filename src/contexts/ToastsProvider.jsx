import { useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import ToastListContainer from "../styles/Toast/ToastListContainer";
import Toast from "../components/Toast";
import { ToastsContext } from "./ToastsContext";
import successIcon from "/src/assets/images/success.svg";
import closeIconSrc from "/src/assets/images/close.svg";

export const ToastsContextProvider = ({ children, maxCount = 3 }) => {
  const [toastList, setToastList] = useState([]);
  const toastId = useRef(0);

  const createToast = ({
    message,
    icon = successIcon,
    closeIcon = closeIconSrc,
    duration = 5,
  }) => {
    setToastList((prev) =>
      [
        { id: toastId.current++, message, icon, closeIcon, duration },
        ...prev,
      ].slice(0, maxCount),
    );
  };

  const removeToast = useCallback((id) => {
    setToastList((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastsContext.Provider value={{ createToast, removeToast }}>
      {children}
      {createPortal(
        <ToastListContainer>
          {toastList.map(({ message, id, icon, closeIcon, duration }) => (
            <Toast
              key={id}
              id={id}
              message={message}
              closeToast={removeToast}
              icon={icon}
              closeIcon={closeIcon}
              duration={duration}
            />
          ))}
        </ToastListContainer>,
        document.getElementById("toast"),
      )}
    </ToastsContext.Provider>
  );
};
