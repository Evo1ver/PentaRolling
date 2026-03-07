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
        <img src={icon} alt="icon" width={24} height={24} />
        {message}
      </Left>
      <ToastCloseButton onClick={() => closeToast(id)}>
        <img src={closeIcon} alt="close" width={24} height={24} />
      </ToastCloseButton>
    </ToastContainer>
  );
};

export default Toast;
