import { useEffect } from "react";
import closeIcon from "/src/assets/icons/close.svg";
import * as S from "./ToastStyle";

const Toast = ({ id, message, duration, closeToast = () => {}, icon }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast(id);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration, closeToast, id]);

  return (
    <S.ToastContainer>
      <S.Left>
        <img src={icon} alt="icon" width={24} height={24} />
        {message}
      </S.Left>
      <S.ToastCloseButton onClick={() => closeToast(id)}>
        <img src={closeIcon} alt="close" width={24} height={24} />
      </S.ToastCloseButton>
    </S.ToastContainer>
  );
};

export default Toast;
