import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div>
      <Link to="/menu" className="link">
        Меню
      </Link>
      {/*<Link to="/lk" className="link">
        Вход / Регистрация
  </Link>*/}
      <Link to="/contacts" className="link">
        Контакты
      </Link>
    </div>
  );
};

export default Header;
