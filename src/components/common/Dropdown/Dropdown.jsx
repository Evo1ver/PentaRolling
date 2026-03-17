import * as S from "./DropdownStyle";
import arrowTopIcon from "../../../assets/icons/arrow_top.svg";
import arrowBottomIcon from "../../../assets/icons/arrow_bottom.svg";
import { useState, useRef, useEffect } from "react";

/**
 * Dropdown Component
 * type: constant 에 저장되어있는 요소를 선택
 * value: 현재 선택된 값으로 초기값은 각 constant 의 첫번째 요소의 value 로 설정
 * onChange: 상위 form 으로 전달할 값으로 선택된 값을 전달
 */

export const Dropdown = ({ type, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleClickDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectValue = (selectedValue) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer ref={ref} onClick={handleClickDropdown}>
      <S.LabelContainer>
        <S.Label>{value}</S.Label>
        <S.ArrowIcon src={isOpen ? arrowTopIcon : arrowBottomIcon} />
      </S.LabelContainer>
      {isOpen && (
        <S.Options>
          {type.map((option) => (
            <S.Option
              key={option.id}
              value={option.value}
              onClick={(e) => {
                e.stopPropagation();
                handleSelectValue(option.value);
              }}
            >
              {option.value}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.DropdownContainer>
  );
};
