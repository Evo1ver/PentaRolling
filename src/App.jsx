import useModal from "./hooks/useModal.js";

const App = () => {
  const { openModalLayout } = useModal();

  return (
    <>
      <button onClick={() => openModalLayout(<div>테스트</div>)}>
        모달 열기
      </button>
    </>
  );
};

export default App;
