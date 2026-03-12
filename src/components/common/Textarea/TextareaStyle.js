import styled from "styled-components";

export const EditorContainer = styled.div`
  width: 720px;
  height: 260px;
  display: flex;
  flex-direction: column;

  // react-quill 전체 영역
  .quill {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  // 에디터 상단 도구 영역
  .ql-toolbar {
    flex-shrink: 0;
    border: 1px solid #000000;
    border-radius: 20px 20px 0 0;
    background-color: #bdbdbd;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    min-height: 42px;
  }

  // 에디터 도구 그룹
  .ql-toolbar .ql-formats {
    display: inline-flex;
    flex-shrink: 0;
    margin-right: 12px;
  }

  // 에디터 텍스트 영역
  .ql-container {
    flex: 1;
    min-height: 0;
    border: 1px solid #000000;
    border-radius: 0 0 8px 8px;
    font-family: "Pretendard", sans-serif;
    font-size: 15px;
    overflow-y: auto;
  }

  // 모바일 반응형 css
  @media (max-width: 767px) {
    width: 320px;
    height: 260px;

    .ql-toolbar {
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      justify-content: space-between;
      padding: 4px;
    }
  }
`;
