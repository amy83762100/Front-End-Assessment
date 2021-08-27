import { Link } from "react-router-dom";
import Menu from "../../Menu/Menu";
import Review from "./Review";
import classes from "./Blue.module.scss";
import SmallSpeakerLeft from "../../../assets/SmallSpeaker1_03@2x.png";
import SmallSpeakerRight from "../../../assets/SmallSpeaker2_03@2x.png";
function Blue() {
  return (
    <section className={classes.blue}>
      <Menu
        backgroundColor="#0B0B0B"
        logoColor="blue"
        selectColor="blue"
        id="menu5"
      />
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
      <Link to="/Pricing" className={classes["btn__try"]}>
        <button className="btn btn-color">TRY IT NOW</button>
      </Link>
    </section>
  );
}
export default Blue;
