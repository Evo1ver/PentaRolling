import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import CreateRollingPaperPage from "./pages/CreateRollingPaperPage/CreateRollingPaperPage";
import APITest from "./pages/Test/APITest";
import useBreakPoint from "./hooks/useBreakPoint";

const App = () => {
  const { pathname } = useLocation();
  const { isMobile } = useBreakPoint();

  const shouldShowHeader =
    !isMobile || pathname === "/" || pathname === "/list";

  return (
    <>
      {shouldShowHeader && <Header />}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post" element={<CreateRollingPaperPage />} />
        <Route path="/test" element={<APITest />} />
      </Routes>
    </>
  );
};

export default App;
