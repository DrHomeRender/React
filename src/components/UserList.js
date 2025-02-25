import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editId, setEditId] = useState(null);

    // 📌 사용자 목록 불러오기 (GET 요청)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.error("오류 발생:", error));
    }, []);

    // 📌 사용자 추가 (POST 요청)
    const addUser = () => {
        if (!name || !email) return alert("이름과 이메일을 입력하세요.");

        const newUser = { name, email };

        axios.post("https://jsonplaceholder.typicode.com/users", newUser)
            .then((response) => {
                setUsers([...users, response.data]);
                setName("");
                setEmail("");
            })
            .catch((error) => console.error("추가 실패:", error));
    };

    // 📌 사용자 수정 (PUT 요청)
    const updateUser = () => {
        if (!editId || !name || !email) return alert("수정할 정보를 입력하세요.");

        axios.put(`https://jsonplaceholder.typicode.com/users/${editId}`, { name, email })
            .then((response) => {
                const updatedUsers = users.map(user =>
                    user.id === editId ? response.data : user
                );
                setUsers(updatedUsers);
                setEditId(null);
                setName("");
                setEmail("");
            })
            .catch((error) => console.error("수정 실패:", error));
    };

    // 📌 사용자 삭제 (DELETE 요청)
    const deleteUser = (id) => {
        if (!window.confirm("정말 삭제하시겠습니까?")) return;

        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch((error) => console.error("삭제 실패:", error));
    };

    // 📄 렌더링
    return (
        <div>
            <h1>👥 사용자 목록</h1>

            {/* 🔹 입력창과 추가/수정 버튼 */}
            <div>
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {editId ? (
                    <button onClick={updateUser}>수정 완료</button>
                ) : (
                    <button onClick={addUser}>사용자 추가</button>
                )}
            </div>

            {/* 🔹 사용자 목록 */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <button onClick={() => { 
                            setEditId(user.id); 
                            setName(user.name);
                            setEmail(user.email);
                        }}>
                            수정
                        </button>
                        <button onClick={() => deleteUser(user.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
