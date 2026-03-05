import { useState } from "react";
import CardImg from "./components/common/CardImg";

const App = () => {
  const [selectedImage] = useState("/profile.svg");

  return (
    <div>
      <CardImg src={selectedImage} />
    </div>
  );
};

export default App;
