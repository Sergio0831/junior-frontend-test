import React, { PureComponent } from "react";
import { LeftArrow, RightArrow } from "./SliderArrows";
import { slider, slide, active } from "./ImageSlider.module.scss";

class ImageSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide = () => {
    const { gallery } = this.props;

    if (this.state.slideIndex !== gallery.length - 1) {
      this.setState({ slideIndex: this.state.slideIndex + 1 });
    } else if (this.state.slideIndex === gallery.length - 1) {
      this.setState({ slideIndex: 0 });
    }
  };

  prevSlide = () => {
    const { gallery } = this.props;

    if (this.state.slideIndex > 0) {
      this.setState({ slideIndex: this.state.slideIndex - 1 });
    } else if (this.state.slideIndex < 1) {
      this.setState({ slideIndex: gallery.length - 1 });
    }
  };

  render() {
    const { gallery } = this.props;
    const { slideIndex } = this.state;

    return (
      <div className={slider}>
        {gallery.map((image, index) => (
          <div
            className={slideIndex === index ? `${slide} ${active}` : slide}
            key={index}
          >
            <img
              src={image}
              alt={index}
              onError={(e) => {
                e.target.src = gallery[0];
              }}
            />
          </div>
        ))}
        <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow nextSlide={this.nextSlide} />
      </div>
    );
  }
}

export default ImageSlider;
