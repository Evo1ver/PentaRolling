import styled from "styled-components";

export const EditorContainer = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  // react-quill-new 전체 영역
  .quill {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .ql-container .ql-editor::before {
    transition: none;
  }

  .ql-container .ql-editor:focus::before {
    opacity: 0;
  }

  // 에디터 상단 도구 영역
  .ql-toolbar {
    flex-shrink: 0;
    border: 1px solid #cccccc;
    border-radius: 10px 10px 0 0;
    background-color: #bdbdbd;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    min-height: 49px;
  }

  // 에디터 도구 그룹
  .ql-toolbar .ql-formats {
    display: inline-flex;
    flex-shrink: 0;
    margin-right: 10px;
  }

  // 에디터 텍스트 영역
  .ql-container {
    flex: 1;
    min-height: 0;
    border: 1px solid #cccccc;
    border-radius: 0 0 8px 8px;
    font-family: "Pretendard", sans-serif;
    font-size: 15px;
    overflow-y: auto;
    background-color: #ffffff;
  }

  @media (max-width: 767px) {
    height: 260px;

    .ql-toolbar {
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      padding: 4px;
    }
  }
`;
