import * as S from "./TextareaStyle";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Textarea = ({ value, onChange }) => {
  const modules = {
    // 도구 선택
    toolbar: [
      ["bold", "italic", "underline"],
      [{ align: "center" }, { align: "right" }, { align: "justify" }],
      [{ list: "bullet" }, { list: "ordered" }],
      [{ color: [] }, { background: [] }],
    ],
  };

  return (
    <S.EditorContainer>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={onChange}
        placeholder="이곳에 내용을 입력하세요."
      />
    </S.EditorContainer>
  );
};

export default Textarea;
