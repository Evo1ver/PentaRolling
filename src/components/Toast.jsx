import { useEffect } from "react";
import ToastCloseButton from "../styles/Toast/ToastCloseButton";
import { ToastContainer, Left } from "../styles/Toast/ToastContainer";
import closeIcon from "/src/assets/images/close.svg";

const Toast = ({ id, message, duration, closeToast = () => {}, icon }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast(id);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration, closeToast, id]);

  return (
    <ToastContainer>
      <Left>
        <img src={icon} alt="icon" />
        {message}
      </Left>
      <ToastCloseButton onClick={() => closeToast(id)}>
        <img src={closeIcon} alt="close" />
      </ToastCloseButton>
    </ToastContainer>
  );
};

export default Toast;
