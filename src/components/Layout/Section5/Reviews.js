import { useState } from "react";
import { Link } from "react-router-dom";
import BtnWhite from "../../Button/BtnWhite";
import Section from "../Section";
import Review from "./Review";
import classes from "./Reviews.module.scss";
import SmallSpeakerLeft from "../../../assets/SmallSpeaker1_03@2x.png";
import SmallSpeakerRight from "../../../assets/SmallSpeaker2_03@2x.png";
function Reviews() {
  const [parentOffsetTop, setParentOffsetTop] = useState(0);
  return (
    <Section
      mainColor="blue"
      menuId="menu5"
      sectionOffsetTop={(parentOffsetTop) =>
        setParentOffsetTop(parentOffsetTop)
      }
    >
      <div className={classes.btn}>
        <Link to="/pricing" className={classes["btn__try"]}>
          <BtnWhite
            content="Try It Now"
            backgroundColor={"#D34848"}
            offsetTop={parentOffsetTop}
          />
        </Link>
      </div>
      <div className={classes.blue}>
        <div className={classes["blue__left"]}>
          <img
            src={SmallSpeakerLeft}
            alt="Small Speaker Left"
            className={classes["img__left"]}
          ></img>
          <img
            src={SmallSpeakerRight}
            alt="Small Speaker Right"
            className={classes["img__right"]}
          ></img>
        </div>
        <div className={classes["blue__right"]}>
          <h1>Reviews</h1>
          <div className={classes["reviews__box"]}>
            <Review title={"Artist"} />
            <Review title={"Producer"} />
            <Review title={"Music Fan"} />
          </div>
        </div>
      </div>
    </Section>
  );
}
export default Reviews;
