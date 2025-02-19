import React from "react";
import Hello from "./components/Hello";
import Counter  from "./components/Counter";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>안녕하세요! Mac에서 React 시작 🚀</h1>
      <p>React 배우는 중...</p>
      <p>여기다 적으면....</p>
      <Hello name="성운" age= {31} role="react 개발자"/>

      {/* 🔹 State를 사용하는 Counter 추가 */}
      <Counter />

    </div>
  );
}

export default App;