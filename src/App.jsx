import CardList from "./components/CardList/CardList";

const App = () => {
  const mockAvatars = [
    "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png",
    "https://picsum.photos/id/522/100/100",
    "https://picsum.photos/id/547/100/100",
    "https://picsum.photos/id/268/100/100",
  ];

  const mockReactions = [
    { id: 1, emoji: "👍", count: 20 },
    { id: 2, emoji: "😍", count: 12 },
    { id: 3, emoji: "😢", count: 7 },
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
        <CardList
          recipientName="SoWon"
          backgroundColor="green"
          avatarImageUrls={mockAvatars}
          messageCount={30}
          reactions={mockReactions}
        />

        <CardList
          recipientName="Jisoo"
          backgroundImageUrl="https://picsum.photos/id/683/3840/2160"
          avatarImageUrls={mockAvatars}
          messageCount={7}
          reactions={mockReactions}
        />

        <CardList
          recipientName="Daeun"
          backgroundColor="beige"
          messageCount={0}
        />
      </div>
    </div>
  );
};

export default App;
