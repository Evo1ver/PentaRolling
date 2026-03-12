import styled from "styled-components";

const DropdownContainer = styled.button`
  position: relative;
  width: 320px;
  height: 50px;
  padding: 12px 16px;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    border: 1px solid var(--gray-500);
  }

  &:active,
  &:focus {
    border: 2px solid var(--gray-500);
  }
`;
const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.label`
  font: var(--font-16-regular);
  color: var(--gray-500);
`;

const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Options = styled.li`
  position: absolute;
  top: 58px;
  left: 0px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
`;

const Option = styled.ul`
  padding: 12px 16px;
  text-align: left;
  font: var(--font-16-regular);
  color: var(--gray-900);

  &:hover {
    background-color: var(--gray-100);
  }
`;

export { DropdownContainer, LabelContainer, Label, ArrowIcon, Options, Option };
