import React from 'react';
import Banner from '../components/Banner';
import ProductSlider from '../components/ProductSlider';

function MainPage() {
  const username = '홍길동'; // 백엔드에서 불러올 예정
  const points = 1000; // 백엔드에서 불러올 예정

  return (
    <div style={{ background: 'white', color: 'black' }}>
      <h1>환영합니다! {username} 님!</h1>
      <Banner />
      <div>
        <h2>현재 포인트: {points} P</h2>
        <button style={{ background: 'red', color: 'white' }}>상품권 교환</button>
      </div>
      <ProductSlider />
    </div>
  );
}

export default MainPage;
