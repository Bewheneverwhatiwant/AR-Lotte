import React from 'react';

function Banner() {
  const banners = ['배너1', '배너2']; // 유동적으로 추가될 예정

  return (
    <div>
      {banners.map((banner, index) => (
        <div key={index} style={{ background: 'red', color: 'white' }}>
          {banner}
        </div>
      ))}
    </div>
  );
}

export default Banner;
