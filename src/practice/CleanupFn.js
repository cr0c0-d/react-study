import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");

    return () => {
      console.log("bye :("); // Cleanup function. 컴포넌트가 destroy될 때 실행되는 함수
    };
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
