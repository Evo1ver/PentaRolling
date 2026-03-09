import styled, { css } from "styled-components";

// Size Variants
const sizeStyles = {
  xsmall: css`
    width: 28px;
    height: 28px;
  `,
  small: css`
    width: 32px;
    height: 32px;
  `,
  medium: css`
    width: 64px;
    height: 64px;
  `,
  large: css`
    width: 80px;
    height: 80px;
  `,
  xlarge: css`
    width: 108px;
    height: 108px;
  `,
};

// Selected Variants
const selectedVariants = {
  true: css`
    border: 2px solid #000000;
    box-shadow: 0 0 0 2px rgba(178, 241, 115, 0.2);
  `,
  false: css`
    border: 1px solid transparent;
  `,
};

// AvatarContainer
export const AvatarContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  background-color: #eeeeee;

  ${({ $size = "medium" }) =>
    sizeStyles[$size] ||
    css`
      width: ${$size};
      height: ${$size};
    `}

  ${({ $selected = false }) => selectedVariants[String($selected)]}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// AvatarSelectorContainer
export const AvatarSelectorContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

export const AvatarOption = styled.button`
  background: none;
  border: none;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;

  &:focus-visible {
    outline: 2px solid #4a90e2;
    outline-offset: 2px;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;
