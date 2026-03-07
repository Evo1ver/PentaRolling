import useToast from "./hooks/useToast";

const App = () => {
  const { createToast } = useToast();

  const handleCreate = () => {
    createToast({
      message: "URL이 복사되었습니다.",
    });
  };

  return (
    <div>
      <button onClick={handleCreate}>생성</button>
    </div>
  );
};

export default App;
