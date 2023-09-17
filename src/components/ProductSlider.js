import React from 'react';

function ProductSlider() {
  const products = ['상품1', '상품2']; // 백엔드에서 불러올 예정

  return (
    <div>
      <h2>고객님께 딱 맞는 상품을 알려드립니다!</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {products.map((product, index) => (
          <div key={index} style={{ minWidth: '200px', background: 'red', color: 'white' }}>
            {product}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
