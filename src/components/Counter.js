import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // 🔹 페이지 최초 렌더링 시 실행
    useEffect(() => {
        alert("카운트를 시작합니다.");
    }, []);

    // 🔹 count가 변경될 때 실행
    useEffect(() => {
        if (count >= 10) {
            alert("최대 카운트 도달!");
        } else if (count >= 5) {
            alert("카운트가 5 이상입니다.");
        }
    }, [count]);

    // 🔹 0 이하로 내려가지 않도록
    function handleDecrease() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>현재 카운트: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1 증가</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-1 감소</button>
            <button onClick={() => setCount(0)}>초기화</button>
            <button onClick={handleDecrease}>-1 감소 (함수 사용)</button>
        </div>
    );
}

export default Counter;
