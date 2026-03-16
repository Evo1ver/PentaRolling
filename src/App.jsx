import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import CreateRollingPaperPage from "./pages/CreateRollingPaperPage/CreateRollingPaperPage";
import APITest from "./pages/Test/APITest";
import useBreakPoint from "./hooks/useBreakPoint";
import PostMessage from "./pages/PostMessage/PostMessage";
import EditMessage from "./pages/EditMessage/EditMessage";
import SendMessage from "./pages/SendMessage/SendMessage";

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
        <Route path="/post" element={<CreateRollingPaperPage />} />
        <Route path="/post/:id" element={<PostMessage />} />
        <Route path="/post/:id/message" element={<SendMessage />} />
        <Route path="/post/:id/edit" element={<EditMessage />} />
        <Route path="/test" element={<APITest />} />
      </Routes>
    </>
  );
};

export default App;
