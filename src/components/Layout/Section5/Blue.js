import Menu from "../../Menu/Menu";
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
      </div>
    </section>
  );
}
export default Blue;
