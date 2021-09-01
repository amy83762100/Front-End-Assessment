import { Link } from "react-router-dom";
import Menu from "../../Menu/Menu";
import Slider from "./Slider";
import classes from "./Header.module.scss";
import btnStyle from "../../Button/Btn.module.scss";
import Image1 from "../../../assets/Image_1@2x.png";
import Image2 from "../../../assets/Image_2@2x.png";
import Image3 from "../../../assets/Image_3@2x.png";
const slides = [Image1, Image2, Image3];
const Header = (props) => {
  return (
    <header className={classes.header}>
      <Slider slides={slides}>
        <Menu
          backgroundColor="#1FE1E9"
          logoColor="#FFFFFF"
          selectColor="black"
          id="menu1"
        />
        <h1 className={classes["header-title"]}>
          INTERACTIVE CONCERT EXPERIENCE
        </h1>
        <p className={classes["header-hook"]}>
          Experience your favorite artists like never before and from the
          comfort of your own home.
        </p>
        <Link to="/pricing">
          <button
            className={`${btnStyle.btn} ${btnStyle.btn__color}`}
            content="TRY IT NOW"
          >
            TRY IT NOW
          </button>
        </Link>
      </Slider>
    </header>
  );
};
export default Header;
