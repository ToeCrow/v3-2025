import React from 'react'

const ShoppingHeader: React.FC = () => {
  return (
    <header id='shopping-header'>
      <img className='flipped-image' src="../src/Assets/detective.png" alt="Sherlock Holmes" />
      <div id="cart">
        <p>Cart</p>
        <div id='cart-amount'>0</div>
      </div>
    </header>
  )
}

export default ShoppingHeader