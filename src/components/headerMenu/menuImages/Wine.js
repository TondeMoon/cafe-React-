import React from 'react';
import WN from '../../../images/wine/wn.jpg';
import bar from '../../../bar.pdf';

import './Image.css';

class Wine extends React.Component {
  onWineClick() {
    window.open(bar);
  }

  render() {
    return (
      <div className="picWrapper" onClick={() => this.onWineClick(bar)}>
        <figure>
          <img className="img" src={WN} alt={'Вино'} />
          <figcaption> Вино</figcaption>
        </figure>
      </div>
    );
  }
}

export default Wine;
