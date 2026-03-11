import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import APITest from "./pages/Test/APITest";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="test/" element={<APITest />} />
      </Routes>
    </>
  );
};

export default App;
