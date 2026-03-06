import * as S from "./TextareaStyle";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Textarea = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      [{ list: "ordered" }, { list: "bullet" }],
      ["clean"],
    ],
  };

  return (
    <S.EditorContainer>
      <ReactQuill
        theme="snow"
        moudles={modules}
        value={value}
        onChange={onChange}
        placeholder="내용을 입력해주세요."
      ></ReactQuill>
    </S.EditorContainer>
  );
};

export default Textarea;
