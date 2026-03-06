import * as S from "./ButtonStyle";

const Button = ({ variant = "primary", size = "40", children, ...props }) => {
  return (
    <S.Button $variant={variant} $size={size} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
