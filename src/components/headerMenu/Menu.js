import React from 'react';
import Breakfast from './menuImages/Breakfast';
import Coffee from './menuImages/Coffee';
import Wine from './menuImages/Wine';

import './menuImages/Image.css';

const Menu = () => {
  return (
    <div>
      <div>
        <h1>Меню</h1>
      </div>
      <div className="menu">
        <Breakfast />
        <Coffee />
        <Wine />
      </div>
    </div>
  );
};

export default Menu;
