import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
