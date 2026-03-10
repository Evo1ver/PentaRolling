import CardList from "./components/CardList/CardList";

const App = () => {
  // Avetar 예시 이미지 URL 배열
  const mockAvatars = [
    "https://picsum.photos/id/1/200/200",
    "https://picsum.photos/id/2/200/200",
    "https://picsum.photos/id/3/200/200",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "40px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* 배경색이 존재할 때*/}
        <CardList
          recipientName="SoWon"
          backgroundColor="green"
          avatarImageUrls={mockAvatars}
          countBadgeCount={27}
          messageCount={30}
          goodCount={20}
          loveCount={12}
          sadCount={7}
        />

        {/* 배경 이미지가 존재할 때 */}
        <CardList
          recipientName="Jisoo"
          backgroundImageUrl="https://picsum.photos/id/28/400/400"
          avatarImageUrls={mockAvatars.slice(0, 3)}
          countBadgeCount={5}
          messageCount={7}
          goodCount={10}
        />

        {/* 메시지가 0개일 때 안내 문구 */}
        <CardList recipientName="Daeun" backgroundColor="beige" />
      </div>
    </div>
  );
};

export default App;
