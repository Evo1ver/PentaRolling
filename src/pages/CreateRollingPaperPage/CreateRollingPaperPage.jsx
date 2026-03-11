import { useState } from "react";
import Input from "../../components/common/Input/Input";
import * as S from "./CreateRollingPaperPageStyle";

const CreateRollingPaperPage = () => {
  const [recipient, setRecipient] = useState("");
  const [inputError, setInputError] = useState(false);

  return (
    <>
      <S.Form action="/create">
        <Input
          value={recipient}
          error={inputError}
          formType="to"
          onChange={(e) => setRecipient(e.target.value)}
          onBlur={() => setInputError(!recipient)}
        />
      </S.Form>
    </>
  );
};

export default CreateRollingPaperPage;
