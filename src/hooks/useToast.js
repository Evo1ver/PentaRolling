import { useContext } from "react";
import { ToastsContext } from "../contexts/ToastsContext";

const useToast = () => {
  const toastContext = useContext(ToastsContext);

  if (!toastContext) {
    throw new Error("Toast provider를 찾을 수 없습니다");
  }

  const { createToast } = toastContext;

  return { createToast };
};

export default useToast;
