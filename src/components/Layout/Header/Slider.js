import React from "react";
import classNames from "classnames/bind";
import classes from "./Slider.module.scss";
const cx = classNames.bind(classes);

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 30;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 10000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  runAutoChangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutoChangeTO();
    }, this.AUTOCHANGE_TIME);
  }
  componentDidMount() {
    this.runAutoChangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  changeSlides(change, activeSlide = null) {
    // window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    if (activeSlide == null) {
      activeSlide = prevSlide + change;
      if (activeSlide < 0) activeSlide = length - 1;
      if (activeSlide >= length) activeSlide = 0;
    }
    this.setState({ activeSlide, prevSlide });
  }
  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={cx({ slider: true, "s--ready": sliderReady })}>
        {this.props.children}
        {this.props.slides.map((slide, index) => (
          <div
            className={cx(["slider__slide"], {
              "s--active": activeSlide === index,
              "s--prev": prevSlide === index,
            })}
            key={slide}
          >
            <div className={classes["slider__slide-parts"]}>
              {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                <div className={classes["slider__slide-part"]} key={i}>
                  <div
                    className={classes["slider__slide-part-inner"]}
                    style={{ backgroundImage: `url(${slide})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={classes["slider__dots"]}>
          {this.props.slides.map((slide, index) => (
            <button
              className={cx(["slider__dots__dot"], {
                "slider__dots__dot--active": index === activeSlide,
              })}
              onClick={() => this.changeSlides(1, index)}
              key={index}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
export default Slider;
