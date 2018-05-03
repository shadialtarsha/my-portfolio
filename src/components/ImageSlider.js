import React from 'react';

class ImageSlider extends React.Component {
  state = {
    current: 0,
  };
  componentDidMount() {
    this.startslide();
  }

  reset = () => {
    const sliderImages = document.querySelectorAll('.slide');
    sliderImages.forEach((image, index) => {
      sliderImages[index].style.display = 'none';
    });
  };

  startslide = () => {
    this.reset();
    const sliderImages = document.querySelectorAll('.slide');
    sliderImages[this.state.current].style.display = 'block';
  };

  slideLeft = () => {
    const sliderImages = document.querySelectorAll('.slide');
    if (this.state.current === 0) {
      this.setState({ current: sliderImages.length }, () => {
        this.reset();
        sliderImages[this.state.current - 1].style.display = 'block';
        this.setState(prevState => ({ current: prevState.current - 1 }));
      });
    } else {
      this.reset();
      sliderImages[this.state.current - 1].style.display = 'block';
      this.setState(prevState => ({ current: prevState.current - 1 }));
    }
  };

  slideRight = () => {
    const sliderImages = document.querySelectorAll('.slide');
    if (this.state.current === sliderImages.length - 1) {
      this.setState({ current: -1 }, () => {
        this.reset();
        sliderImages[this.state.current + 1].style.display = 'block';
        this.setState(prevState => ({ current: prevState.current + 1 }));
      });
    } else {
      this.reset();
      sliderImages[this.state.current + 1].style.display = 'block';
      this.setState(prevState => ({ current: prevState.current + 1 }));
    }
  };

  render() {
    return (
      <div className="wrap">
        <div className="slider-arrow slider-arrow-right" role="button" onClick={this.slideRight}>
          <div className="slider-lines">
            <div className="slider-arrow__line slider-arrow__line--right-upper" />
            <div className="slider-arrow__line slider-arrow__line--right-lower" />
          </div>
        </div>
        <div id="slider">
          {this.props.images.map(imageUrl => (
            <div
              key={imageUrl}
              className="slide"
              style={{
                backgroundImage: `url(http://localhost:3333/images/${this.props.id}/${imageUrl})`,
              }}
            />
          ))}
        </div>
        <div className="slider-arrow slider-arrow-left" role="button" onClick={this.slideLeft}>
          <div className="slider-lines">
            <div className="slider-arrow__line slider-arrow__line--left-upper" />
            <div className="slider-arrow__line slider-arrow__line--left-lower" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
