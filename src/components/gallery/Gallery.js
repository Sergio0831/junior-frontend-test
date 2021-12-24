import React, { PureComponent } from "react";
import classes from "./Gallery.module.scss";

class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  selectFigure = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { gallery = [] } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className={classes.gallery}>
        {gallery.length > 1 ? (
          <div className={classes.gallery__figures}>
            {gallery.map((figure, index) => (
              <img
                key={index}
                onClick={() => this.selectFigure(index)}
                className={
                  index === currentIndex
                    ? [classes.figure__selected, classes.gallery__figure].join(
                        " "
                      )
                    : classes.gallery__figure
                }
                src={figure}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
                alt={index}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        <figure className={classes.gallery__selected}>
          <img src={gallery[currentIndex]} alt='selected' />
        </figure>
      </div>
    );
  }
}

export default Gallery;
