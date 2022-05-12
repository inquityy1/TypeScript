import { createRoot } from "react-dom/client";
import GuestList from "./state/GuestList";

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
