import { useState } from "react";
import {
  createMessage,
  getMessage,
  getMessageList,
} from "../../lib/api/message";
import FONTS from "../../constants/fonts";
import RELATIONS from "../../constants/relations";
import { NormalCard } from "../../components/Card/Card";
import {
  addReaction,
  getReactions,
  removeReaction,
} from "../../lib/api/reaction";
import { formatDate } from "../../lib/date";
import {
  createRollingPaper,
  deleteRollingPaper,
  getRollingPaper,
  getRollingPaperList,
} from "../../lib/api/rollingpaper";
import CardList from "../../components/CardList/CardList";

const APITest = () => {
  const [datas, setDatas] = useState([]);
  const [rpDatas, setRpDatas] = useState([]);

  // const TeamId = "23-2";
  const RecipientId = 16557;
  const MessageId = 32798;

  const handleCreateClick = async () => {
    const datas = await createMessage(RecipientId, {
      content: "메세지 생성 API 테스트",
      sender: "김철수",
      profileImageURL:
        "https://fastly.picsum.photos/id/794/200/200.jpg?hmac=qNLJvkiBmg4TyCSCwU__daf9sb5La0_1eRzJewRgIyU",
      relationship: RELATIONS[1].value, // 배열의 2번째 원소 => "친구"
      font: FONTS[1].value, // 배열의 2번째 원소 => "Pretendard"
    });
    console.log(datas);
  };

  const handleGetListClick = async () => {
    const results = await getMessageList(RecipientId, 4);
    setDatas(results.results);
    console.log(results.results);
  };

  const handleGetClick = async (id) => {
    const data = await getMessage(id);
    setDatas([data]);
  };

  const handleGetReactionClick = async (id) => {
    const data = await getReactions(id);
    console.log(data);
  };

  const handleAddReactionClick = async (id) => {
    const data = await addReaction(id, "😍"); // 👍😍😢
    console.log(data);
  };

  const handleRemoveReactionClick = async (id) => {
    const data = await removeReaction(id, "👍");
    console.log(data);
  };

  const handleAddRollingPaperClick = async () => {
    const data = {
      name: "asdf",
      backgroundColor: "purple",
    };

    await createRollingPaper(data);
  };

  const handleGetRollingPaperListClick = async () => {
    const lists = await getRollingPaperList(4, 0);
    console.log(lists.results);
    setRpDatas(lists.results);
  };

  const handleGetRollingPaperClick = async () => {
    const data = await getRollingPaper(RecipientId);
    console.log(data);
    setRpDatas([data]);
  };

  const handleDeleteRollingPaperClick = async () => {
    await deleteRollingPaper(16715);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={handleCreateClick}>메세지 생성</button>
        <button onClick={handleGetListClick}>메세지 목록 조회</button>
        <button onClick={() => handleGetClick(MessageId)}>
          단일 메세지 조회
        </button>
        <button onClick={() => handleGetReactionClick(RecipientId)}>
          단일 대상 반응 조회
        </button>
        <button onClick={() => handleAddReactionClick(RecipientId)}>
          단일 대상 반응 추가
        </button>
        <button onClick={() => handleRemoveReactionClick(RecipientId)}>
          단일 대상 반응 삭제
        </button>
      </div>
      <div style={{ display: "flex", overflowX: "auto", gap: "1rem" }}>
        {datas?.map((data) => (
          <NormalCard
            key={data.id}
            name={data.sender}
            relationship={data.relationship}
            profileImg={data.profileImageURL}
            content={data.content}
            date={formatDate(data.createdAt)}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => handleAddRollingPaperClick()}>
          롤링 페이퍼 추가
        </button>
        <button onClick={() => handleGetRollingPaperListClick()}>
          롤링 페이퍼 리스트 조회
        </button>
        <button onClick={() => handleGetRollingPaperClick()}>
          단일 롤링 페이퍼 조회
        </button>
        <button onClick={() => handleDeleteRollingPaperClick()}>
          롤링 페이퍼 삭제
        </button>
      </div>
      <div style={{ display: "flex", overflowX: "auto", gap: "1rem" }}>
        {rpDatas?.map((data) => (
          <CardList
            key={data.id}
            recipientName={data.name}
            backgroundImageUrl={data.backgroundImageURL}
            backgroundColor={data.backgroundColor}
            messageCount={data.messageCount}
          />
        ))}
      </div>
    </div>
  );
};

export default APITest;
