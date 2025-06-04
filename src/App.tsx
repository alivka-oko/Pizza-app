import Button from "./components/Button/Button";
import "./App.css";
import { useState } from "react";
import type { MouseEvent } from "react";

function App() {
  const [counter, setCounter] = useState<number>(0);
  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };
  return (
    <>
      <Button onClick={addCounter}>Кнопка {counter}</Button>
    </>
  );
}

export default App;
