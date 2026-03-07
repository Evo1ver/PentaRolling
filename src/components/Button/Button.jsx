import { useState } from "react";
import * as S from "./ButtonStyle";
import plusIcon from "../../assets/plus.svg";
import emojiIcon from "../../assets/emoji.svg";
import arrowRightIcon from "../../assets/arrow_right.svg";
import arrowLeftIcon from "../../assets/arrow_left.svg";
import trashIcon from "../../assets/trash.svg";

export { emojiIcon, trashIcon };

// ─────────────────────────────────────────────
// Button
// variant: "primary" | "secondary" | "outlined"
// size: "large" | "small" | 56 | 40 | 36 | 28
// state: "enabled" | "disabled" | "hover" | "pressed" | "focus"
// ─────────────────────────────────────────────
export function Button({ variant = "primary", size = "large", state, icon = null, children, onClick }) {
  return (
    <S.StyledButton
      $variant={variant}
      $size={size}
      $state={state}
      disabled={state === "disabled"}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" style={{ width: "20px", height: "20px" }} />}
      {children}
    </S.StyledButton>
  );
}

// ─────────────────────────────────────────────
// EmojiButton
// size: 40 | 36 | 28
// state: "enabled" | "disabled" | "hover" | "pressed" | "focus"
// ─────────────────────────────────────────────
export function EmojiButton({ size = 40, state, icon = emojiIcon, children, onClick }) {
  return (
    <S.StyledButton
      $variant="emojiButton"
      $size={`icon-${size}`}
      $state={state}
      disabled={state === "disabled"}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" style={{ width: "20px", height: "20px" }} />}
      {children}
    </S.StyledButton>
  );
}

// ─────────────────────────────────────────────
// PlusButton
// state: "enabled" | "disabled" | "hover" | "pressed" | "focus"
// ─────────────────────────────────────────────
export function PlusButton({ state, icon, onClick }) {
  return (
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
}

// ─────────────────────────────────────────────
// DeleteIconButton
// size: 40 | 36 | 28
// state: "enabled" | "disabled" | "hover" | "pressed" | "focus"
// ─────────────────────────────────────────────
export function DeleteIconButton({ size = 36, state, icon = trashIcon, onClick }) {
  return (
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
}

// ─────────────────────────────────────────────
// ArrowButton
// direction: "right" | "left"
// ─────────────────────────────────────────────
export function ArrowButton({ direction = "right", onClick, disabled = false }) {
  return (
    <S.ArrowButton disabled={disabled} onClick={onClick}>
      <img
        src={direction === "right" ? arrowRightIcon : arrowLeftIcon}
        alt={direction === "right" ? "arrow right" : "arrow left"}
        style={{ width: "16px", height: "16px" }}
      />
    </S.ArrowButton>
  );
}

// ─────────────────────────────────────────────
// ToggleButtonGroup
// options: { label: string, value: string }[]
// ─────────────────────────────────────────────
export function ToggleButtonGroup({ options = [], defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue ?? options[0]?.value);

  const handleSelect = (value) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <S.ToggleGroup>
      {options.map((opt, idx) => (
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
}

