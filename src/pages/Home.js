import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>🏠 홈 페이지입니다!</h1>
            <button onClick={() => navigate("/about")}>소개 페이지로 이동</button>
        </div>
    );
}

export default Home;

