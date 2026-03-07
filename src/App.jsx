import { useState } from "react";
import Input from "./components/Input";

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
    </>
  );
};

export default App;
