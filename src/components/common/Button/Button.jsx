import { useState } from "react";
import * as S from "./ButtonStyle";
import plusIcon from "../../../assets/icons/plus.svg";
import emojiIcon from "../../../assets/icons/emoji.svg";
import arrowRightIcon from "../../../assets/icons/arrow_right.svg";
import arrowLeftIcon from "../../../assets/icons/arrow_left.svg";
import trashIcon from "../../../assets/icons/trash.svg";

export { emojiIcon, trashIcon };

// Button
// variant: "primary" | "secondary" | "outlined"
// size: "large" | "small" | 56 | 40 | 36 | 28
export const Button = ({
  variant = "primary",
  size = "large",
  state,
  icon = null,
  children,
  onClick,
}) => (
  <S.StyledButton
    $variant={variant}
    $size={size}
    $state={state}
    disabled={state === "disabled"}
    onClick={onClick}
  >
    {icon && (
      <img src={icon} alt="icon" style={{ width: "20px", height: "20px" }} />
    )}
    {children}
  </S.StyledButton>
);

// EmojiButton
// size: 40 | 36 | 28
export const EmojiButton = ({
  size = 40,
  state,
  icon = emojiIcon,
  children,
  onClick,
}) => (
  <S.StyledButton
    $variant="emojiButton"
    $size={`icon-${size}`}
    $state={state}
    disabled={state === "disabled"}
    onClick={onClick}
  >
    {icon && (
      <img src={icon} alt="icon" style={{ width: "20px", height: "20px" }} />
    )}
    {children}
  </S.StyledButton>
);

// PlusButton
export const PlusButton = ({ state, icon, onClick }) => (
  <S.PlusButton
    $state={state}
    disabled={state === "disabled"}
    onClick={onClick}
  >
    <img
      src={icon ?? plusIcon}
      alt="icon"
      style={{ width: "24px", height: "24px" }}
    />
  </S.PlusButton>
);

// DeleteIconButton
// size: 40 | 36 | 28
export const DeleteIconButton = ({
  size = 36,
  state,
  icon = trashIcon,
  onClick,
}) => (
  <S.StyledButton
    $variant="deleteIcon"
    $size={`square-${size}`}
    $state={state}
    disabled={state === "disabled"}
    onClick={onClick}
  >
    <img src={icon} alt="icon" style={{ width: "16px", height: "16px" }} />
  </S.StyledButton>
);

// ArrowButton
// direction: "right" | "left"
export const ArrowButton = ({
  direction = "right",
  onClick,
  disabled = false,
}) => (
  <S.ArrowButton disabled={disabled} onClick={onClick}>
    <img
      src={direction === "right" ? arrowRightIcon : arrowLeftIcon}
      alt={direction === "right" ? "arrow right" : "arrow left"}
      style={{ width: "16px", height: "16px" }}
    />
  </S.ArrowButton>
);

// ToggleButtonGroup
// options: { label: string, value: string }[]
export const ToggleButtonGroup = ({ options = [], defaultValue, onChange }) => {
  const [selected, setSelected] = useState(defaultValue ?? options[0]?.value);

  const handleSelect = (value) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <S.ToggleGroup>
      {options.map((opt) => (
        <S.ToggleItem
          key={opt.value}
          $isActive={selected === opt.value}
          onClick={() => handleSelect(opt.value)}
        >
          {opt.label}
        </S.ToggleItem>
      ))}
    </S.ToggleGroup>
  );
};
