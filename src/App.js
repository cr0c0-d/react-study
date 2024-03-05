import { useState, useEffect } from "react";

function Hello() {
  function byfn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byfn; // Cleanup function. 컴포넌트가 destroy될 때 실행되는 함수
  }
  useEffect(hiFn, []);
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
