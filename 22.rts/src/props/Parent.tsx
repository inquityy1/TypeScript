import { ChildAsFC, Child } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Clicked!")}>
      blue
    </ChildAsFC>
  );
};

export default Parent;
