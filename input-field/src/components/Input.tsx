import React, { useState } from "react";

function Input() {
  const [text, setText] = useState<string>();
  return (
    <div>
      <input
        placeholder="Enter text here"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />

      <p>{text}</p>
    </div>
  );
}

export default Input;
