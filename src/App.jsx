import { useState } from "react";
import { Dropdown } from "./components/common/Dropdown/Dropdown";
import RELATIONS from "./constants/relations";
import FONTS from "./constants/fonts";

const App = () => {
  const [relation, setRelation] = useState(RELATIONS[0].value);
  const [font, setFont] = useState(FONTS[0].value);

  return (
    <>
      <Dropdown type={RELATIONS} value={relation} onChange={setRelation} />
      <Dropdown type={FONTS} value={font} onChange={setFont} />
    </>
  );
};

export default App;
