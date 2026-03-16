import { useEffect, useState } from "react";
import Input from "../../components/common/Input/Input";
import * as S from "./CreateRollingPaperPageStyle";
import {
  Button,
  ToggleButtonGroup,
} from "../../components/common/Button/Button";
import selectedIcon from "../../assets/icons/selected.svg";
import { useNavigate } from "react-router-dom";
import { getBackgroundImages } from "../../lib/api/image";
import { createRollingPaper } from "../../lib/api/rollingPaper";
import BACKGROUND_COLORS from "../../constants/backgroundColors";

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

const CreateRollingPaperPage = () => {
  const [recipient, setRecipient] = useState("");
  const [inputError, setInputError] = useState(false);
  const [toggle, setToggle] = useState(toggleOption[0].value);
  const [backgroundColor, setBackgroundColor] = useState(
    BACKGROUND_COLORS[0].label,
  );
  const [imageList, setImageList] = useState([]);
  const [backgroundImageURL, setBackgroundImageURL] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBackgroundImages = async () => {
      try {
        const images = await getBackgroundImages();
        setImageList(images);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBackgroundImages();
  }, []);

  const handleOptionChange = (value) => {
    setToggle(value);
    // 탭 전환 시 반대편 선택 상태 초기화 (상호 배타적 선택 보장)
    if (value === "image") {
      setBackgroundColor(BACKGROUND_COLORS[0].label);
    } else {
      setBackgroundImageURL(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 폼 제출
    let formData = {
      name: recipient,
      backgroundColor,
    };

    if (toggle === "image") {
      formData = {
        ...formData,
        backgroundImageURL,
      };
    }

    try {
      const res = await createRollingPaper(formData);
      // 생성 완료 시 생성된 페이지 이동
      navigate(`/post/${res.id}`);
    } catch (error) {
      console.error("롤링페이퍼 생성 실패:", error);
    }
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
          <S.ToggleWrapper>
            <ToggleButtonGroup
              options={toggleOption}
              onChange={handleOptionChange}
            />
          </S.ToggleWrapper>
          <S.SelectorContent>
            {toggle === "color" ? (
              <>
                {BACKGROUND_COLORS.map(({ label, color }) => (
                  <S.SelectorFragment
                    key={color}
                    $color={color}
                    onClick={() => setBackgroundColor(label)}
                    $isActive={backgroundColor === label}
                  >
                    {label === backgroundColor && (
                      <img src={selectedIcon} alt="선택됨" />
                    )}
                  </S.SelectorFragment>
                ))}
              </>
            ) : (
              <>
                {imageList.map((imageURL) => (
                  <S.SelectorFragment
                    key={imageURL}
                    $imageURL={imageURL}
                    onClick={() => setBackgroundImageURL(imageURL)}
                    $isActive={backgroundImageURL === imageURL}
                  >
                    {imageURL === backgroundImageURL && (
                      <img src={selectedIcon} alt="선택됨" />
                    )}
                  </S.SelectorFragment>
                ))}
              </>
            )}
          </S.SelectorContent>
        </div>

        <S.ButtonContainer>
          <Button
            state={!recipient ? "disabled" : "default"}
            size={56}
            style={{ width: "100%" }}
          >
            생성하기
          </Button>
        </S.ButtonContainer>
      </S.Form>
    </>
  );
};

export default CreateRollingPaperPage;
