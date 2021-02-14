import React from 'react';
import CF from '../../../images/coffee/cf.jpg';
import menuCoffee from './../../../coffee.pdf';
import './Image.css';

class Coffee extends React.Component {
  onCoffeeClick() {
    window.open(menuCoffee);
  }

  render() {
    return (
      <div
        className="picWrapper"
        onClick={() => this.onCoffeeClick(menuCoffee)}
      >
        <figure>
          <img className="img" src={CF} alt={'Кофе'} />
          <figcaption>Кофе</figcaption>
        </figure>
      </div>
    );
  }
}

export default Coffee;
