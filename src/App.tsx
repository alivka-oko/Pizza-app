import Button from "./components/Button/Button";
import "./App.css";

function App() {
  return (
    <>
      <Button
        onClick={() => {
          console.log("mem");
        }}
      >
        Кнопка
      </Button>
    </>
  );
}

export default App;
