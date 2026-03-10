import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "../pages/ListPage/ListPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/list" element={<div>리스트 화면</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
