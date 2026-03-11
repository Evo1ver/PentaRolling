import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import CreateRollingPaperPage from "./pages/CreateRollingPaperPage/CreateRollingPaperPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<CreateRollingPaperPage />} />
      </Routes>
    </>
  );
};

export default App;
