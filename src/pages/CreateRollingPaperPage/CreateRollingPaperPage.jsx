import { useState } from "react";
import Input from "../../components/common/Input/Input";
import * as S from "./CreateRollingPaperPageStyle";
import {
  Button,
  ToggleButtonGroup,
} from "../../components/common/Button/Button";
import selectedIcon from "../../assets/icons/selected.svg";
import { useNavigate } from "react-router-dom";

const toggleOption = [
  {
    value: "color",
    label: "컬러",
  },
  {
    value: "image",
    label: "이미지",
  },
];

const BACKGROUND_COLORS = ["#FFE2AD", "#ECD9FF", "#B1E4FF", "#D0F5C3"];

const CreateRollingPaperPage = () => {
  const [recipient, setRecipient] = useState("");
  const [inputError, setInputError] = useState(false);
  const [toggle, setToggle] = useState(toggleOption[0].value);
  const [selectedFragment, setSelectedFragment] = useState(0);
  const navigate = useNavigate();

  const handleOptionChange = (value) => {
    setToggle(value);
  };

  const handleFragmentClick = (index) => {
    setSelectedFragment(index);
  };

  const handleSubmit = () => {
    // 폼 제출

    // 생성 완료 시 생성된 페이지 이동
    navigate(`/post/`);
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <Input
          value={recipient}
          error={inputError}
          formType="to"
          onChange={(e) => setRecipient(e.target.value)}
          onBlur={() => setInputError(!recipient)}
        />

        <div>
          <S.SelectorDescription>
            <S.SelectorLabel>배경화면을 선택해 주세요.</S.SelectorLabel>
            컬러를 선택하거나 이미지를 선택할 수 있습니다.
          </S.SelectorDescription>
          <div style={{ marginBottom: "40px" }}>
            <ToggleButtonGroup
              options={toggleOption}
              onChange={handleOptionChange}
            />
          </div>
          <S.SelectorContent>
            {toggle === "color" ? (
              <>
                {BACKGROUND_COLORS.map((color, index) => (
                  <S.SelectorFragment
                    key={color}
                    $color={color}
                    onClick={() => handleFragmentClick(index)}
                    $isActive={selectedFragment === index}
                  >
                    {index === selectedFragment && (
                      <>
                        <img src={selectedIcon} alt="" />
                      </>
                    )}
                  </S.SelectorFragment>
                ))}
              </>
            ) : (
              <div>이미지</div>
            )}
          </S.SelectorContent>
        </div>

        <Button
          state={!recipient ? "disabled" : "default"}
          size={56}
          style={{ width: "100%" }}
        >
          생성하기
        </Button>
      </S.Form>
    </>
  );
};

export default CreateRollingPaperPage;
