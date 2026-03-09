import { useState } from "react";
import Input from "./components/common/Input/Input";
import Avatar from "./components/common/Avatar/Avatar";

const App = () => {
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const v = e.target.value;
    setValue(v);
    if (v) setIsError(false);
  };

  const handleBlur = (e) => {
    const v = e.target.value;
    setValue(v);

    if (!v) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <>
      <Input
        value={value}
        error={isError}
        formType="from"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Avatar />
    </>
  );
};

export default App;
