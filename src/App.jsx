import { Routes, Route } from "react-router-dom";
import { ToastsContextProvider } from "./contexts/ToastsProvider";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import CreateRollingPaperPage from "./pages/CreateRollingPaperPage/CreateRollingPaperPage";
import PostMessage from "./pages/PostMessage/PostMessage";
import SendMessage from "./pages/SendMessage/SendMessage";
import APITest from "./pages/Test/APITest";

const App = () => {
  return (
    <ToastsContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<CreateRollingPaperPage />} />
        <Route path="/post/:id" element={<PostMessage />} />
        <Route path="/post/:id/message" element={<SendMessage />} />
        <Route path="/test" element={<APITest />} />
      </Routes>
    </ToastsContextProvider>
  );
};

export default App;
