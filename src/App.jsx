import CardList from "./components/CardList/CardList";

const App = () => {
  const mockAvatars = [
    "https://picsum.photos/id/1/200/200",
    "https://picsum.photos/id/2/200/200",
    "https://picsum.photos/id/3/200/200",
  ];

  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
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

      <CardList recipientName="친구" />
    </div>
  );
};

export default App;
