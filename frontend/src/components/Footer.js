import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            
<nav class="nav">
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">home</i>
    <span class="nav__text">Home</span>
  </a>
  <a href="#" class="nav__link nav__link--active">
    <i class="material-icons nav__icon">shop</i>
    <span class="nav__text">Buy</span>
  </a>
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">devices</i>
    <span class="nav__text">Deals</span>
  </a>
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">lock</i>
    <span class="nav__text">Wallet</span>
  </a>
  <a href="#" class="nav__link">
    <i class="material-icons nav__icon">settings</i>
    <span class="nav__text">More</span>
  </a>
</nav>
            
        </div>
    )
}

export default Footer
