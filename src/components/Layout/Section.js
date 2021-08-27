import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import classes from "./Section.module.scss";
function Section(props) {
  let menu = {
    backgroundColor: "#0B0B0B",
    logoColor: props.mainColor,
    selectColor: props.mainColor,
  };
  let backgroundColor;
  switch (props.mainColor) {
    case "red":
      backgroundColor = "#D34848";
      break;
    case "blue":
      backgroundColor = "#1FE1E9";
      break;
    case "yellow":
      backgroundColor = "#FFB33F";
      break;
    case "black":
      menu.backgroundColor = "#1FE1E9";
      menu.logoColor = "white";
      backgroundColor = "#0B0B0B";
      break;
    default:
      menu.backgroundColor = "#0000005C";
      menu.logoColor = "white";
      menu.selectColor = "black";
      backgroundColor = "#707070";
      break;
  }
  const sectionStyle = {
    backgroundColor: backgroundColor,
    height: `${props.height}vh`,
  };
  return (
    <section
      id={props.sectionId}
      className={classes.section}
      style={sectionStyle}
    >
      <Menu
        backgroundColor={menu.backgroundColor}
        logoColor={menu.logoColor}
        selectColor={menu.selectColor}
        id={props.menuId}
      />
      {props.children}
      {props.tryBtn && (
        <Link to="/Pricing" className={classes["btn__try"]}>
          <button className="btn btn-color">TRY IT NOW</button>
        </Link>
      )}
    </section>
  );
}
export default Section;
