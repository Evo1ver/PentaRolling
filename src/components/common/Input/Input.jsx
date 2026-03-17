import * as S from "./InputStyle";

const FROM_PLACEHOLDER = "이름을 입력해 주세요.";
const TO_PLACEHOLDER = "받는 사람 이름을 입력해 주세요.";
const ERROR_MESSAGE = "값을 입력해 주세요.";

const Input = ({
  value,
  error,
  formType,
  onChange,
  onBlur,
  hasBackgroundImage,
}) => {
  return (
    <S.InputContainer>
      <S.Label htmlFor={formType} $hasBackgroundImage={hasBackgroundImage}>
        {formType === "from" ? "From" : "To"}
      </S.Label>
      <S.InputContents
        id={formType}
        value={value}
        $error={error}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={formType === "from" ? FROM_PLACEHOLDER : TO_PLACEHOLDER}
      />
      {error && <S.ErrorMessage>{ERROR_MESSAGE}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
