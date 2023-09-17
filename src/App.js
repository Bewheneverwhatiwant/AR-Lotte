import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GamePage from './pages/GamePage';
import './App.css'; // CSS 스타일을 적용하기 위한 import

function App() {
  const menus = ['메인페이지', '게임 영역', '추가1', '추가2']; // 메뉴 리스트

  return (
    <Router>
      <div className="content">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="게임 영역" element={<GamePage />} />
          {/* 추후 추가할 페이지 */}
          <Route path="추가1" element={<div>추가 페이지1</div>} />
          <Route path="추가2" element={<div>추가 페이지2</div>} />
        </Routes>
      </div>
      
      {/* 하단 네비게이션 바 */}
      <nav className="bottom-nav">
        <ul>
          {menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu === '메인페이지' ? '/' : `/${menu}`}>
                <button>{menu}</button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Router>
  );
}

export default App;
