import React, { ChangeEvent, FormEvent, useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants.ts";

type TFeedbackFormProps = {
  onAddToList: (text: string) => void;
};
const FeedbackForm = ({ onAddToList }: TFeedbackFormProps) => {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddToList(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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
