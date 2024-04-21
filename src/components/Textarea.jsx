import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (event) => {
    let text = event.target.value;

    if (text.includes("<script>")) {
      setWarningText("Scripts are not allowed");
      text = event.target.value.replace("<script>", "");
    } else if (text.includes("@")) {
      setWarningText("@ symbols are not allowed");
      text = event.target.value.replace("@", "");
    } else {
      setWarningText("");
    }

    setText(text);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing here..."
        spellCheck="false"
      />
      <Warning text={warningText} />
    </div>
  );
}
