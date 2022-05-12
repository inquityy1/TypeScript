import { createRoot } from "react-dom/client";
import Parent from "./props/Parent";

const App = () => {
  return (
    <h1>
      <Parent />
    </h1>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
