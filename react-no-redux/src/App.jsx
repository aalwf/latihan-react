import { useState } from "react";
import Parent1 from "./components/Parent1";

function App() {
  const [name, setName] = useState("");
  useState(() => {
    setName("Ginz");
  }, []);

  return (
    <>
      <h1>Hello {name}</h1>
      <Parent1 name={name} />
    </>
  );
}

export default App;
