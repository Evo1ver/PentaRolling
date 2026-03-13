import { getMessageList } from "../../lib/api/message";
import useFetch from "../../hooks/useFetch";
import useBreakPoint from "../../hooks/useBreakPoint";
import useAsync from "../../hooks/useAsync";

const FetchTest = ({ recipientId = 16771 }) => {
  const { data, loading, error } = useFetch(() => getMessageList(recipientId));
  const { data2, loading2, error2, execute } = useAsync(() =>
    getMessageList(recipientId),
  );
  const { isMobile, isTablet, isDesktop } = useBreakPoint();

  return (
    <div>
      {loading && <div>로딩중...</div>}
      {error && <div>에러 발생</div>}
      {data && (
        <div>
          {data.results.map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
        </div>
      )}
      {isMobile && <div>모바일</div>}
      {isTablet && <div>태블릿</div>}
      {isDesktop && <div>데스크탑</div>}
      <hr />
      <button onClick={execute}>데이터 가져오기</button>
      {loading2 && <div>로딩중...</div>}
      {error2 && <div>에러 발생</div>}
      {data2 && (
        <div>
          {data2.results.map((item) => (
            <div key={item.id}>{item.content}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchTest;
