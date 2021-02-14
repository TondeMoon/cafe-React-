import React from 'react';
import BF from '../../../images/breakfasts/bf.jpg';
import food from '../../../food.pdf';
import './Image.css';

class Breakfast extends React.Component {
  onBreakfastClick() {
    window.open(food);
  }

  render() {
    return (
      <div className="picWrapper" onClick={() => this.onBreakfastClick(food)}>
        <figure>
          <img className="img" src={BF} alt={'Завтраки'} />
          <figcaption>Завтраки</figcaption>
        </figure>
      </div>
    );
  }
}

export default Breakfast;
