import React, { PureComponent } from "react";
import Button from "../ui/Buttons/Button";
import classes from "./SliderArrows.module.scss";

export class LeftArrow extends PureComponent {
  render() {
    const { prevSlide } = this.props;

    return (
      <Button onClick={prevSlide} className={classes.prevBtn}>
        <svg
          width='8'
          height='14'
          viewBox='0 0 8 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7 13L1 7L7 1'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Button>
    );
  }
}

export class RightArrow extends PureComponent {
  render() {
    const { nextSlide } = this.props;

    return (
      <Button onClick={nextSlide} className={classes.nextBtn}>
        <svg
          width='8'
          height='14'
          viewBox='0 0 8 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 13L7 7L1 1'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </Button>
    );
  }
}
