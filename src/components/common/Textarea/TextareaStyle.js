import styled from "styled-components";

export const EditorContainer = styled.div`
  width: 720px;
  height: 260px;

  // 에디터 상단 도구 영역
  .ql-toolbar {
    border: 1px solid #000000;
    border-radius: 20px 20px 0 0;
    background-color: #bdbdbd;
  }

  // 에디터 텍스트 영역
  .ql-container {
    border: 1px solid #000000;
    border-radius: 0 0 8px 8px;
    height: 200px;
    font-family: "Pretendard", sans-serif;
    font-size: 15px;
  }
`;
