import { ChangeEvent, useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants.ts";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };
  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="..."
        spellCheck={false}
        value={text}
        onChange={handleChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
