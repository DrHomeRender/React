import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import User from "./pages/User";
import UserList from "./components/UserList";

function App() {
    return (
        <Router>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>
            <span role="img" aria-label="rocket">🚀</span> React API 연동 (POST 요청)
            </h1>
                <UserList />

                {/* 🔹 네비게이션 메뉴 */}
                <nav style={{ margin: "20px 0" }}>
                    <Link to="/" style={{ margin: "0 10px" }}>
                        <span role="img" aria-label="home">🏠</span> 홈
                    </Link>
                    <Link to="/about" style={{ margin: "0 10px" }}>
                        <span role="img" aria-label="about">ℹ️</span> 소개
                    </Link>
                    <Link to="/contact" style={{ margin: "0 10px" }}>
                        <span role="img" aria-label="contact">📞</span> 연락처
                    </Link>
                </nav>

                {/* 🔹 페이지 라우팅 */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/user/:name" element={<User />} />
                    <Route path="*" element={<NotFound />} /> {/* 404 페이지 처리 */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
