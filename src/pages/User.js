import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { name } = useParams();  // 🔹 URL 파라미터 가져오기

    return (
        <div>
            <h1>👋 {name}님, 환영합니다!</h1>
        </div>
    );
}

export default User;

