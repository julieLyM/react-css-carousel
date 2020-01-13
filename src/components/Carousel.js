import React, { Component } from 'react';
import './style/carousel.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openIndex: 0,
    };
  }

  isClicked = offset => {
    this.setState(prevState => ({
      openIndex: prevState.openIndex + offset,
    }));
  };

  render() {
    return (
      <div className="containerPage">
        <div
          style={{
            transition: 'all 1s ease',
            transform: `translateX(${this.state.openIndex * 100}%)`,
          }}
          className="containerCarousel"
        >
          <div className="imgCarousel">
            <img
              src="https://www.francetvinfo.fr/image/759w74cas-bf21/1200/450/18853047.jpg"
              alt=""
            />
          </div>

          <div className="imgCarousel">
            <img
              src="https://d23.com/app/uploads/2019/09/1180w-600h_090919-coco-at-the-hollywood-bowl-iris-780x440-1568132107.jpg"
              alt=""
            />
          </div>
          <div className="imgCarousel slide">
            <img
              src="https://www.geekfeed.com/wp-content/uploads/2018/08/23-Wreck-It-Ralph-2-Poster.jpg"
              alt=""
            />
          </div>
          <div className="imgCarousel slide">
            <img
              src="https://www.journaldugeek.com/content/uploads/2019/04/disney.jpg"
              alt=""
            />
          </div>
        </div>
        <div style={{ position: 'relative', top: -50 }}>
          <button onClick={this.isClicked.bind(null, 1)}>precedent</button>
          <button onClick={this.isClicked.bind(null, -1)}>suivant</button>
        </div>
      </div>
    );
  }
}
