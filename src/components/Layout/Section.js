import { useRef } from "react";
import Menu from "../Menu/Menu";
import classes from "./Section.module.scss";
function Section(props) {
  let menu = {
    backgroundColor: "#0B0B0B",
    logoDefaultColor: "#FFFFFF",
    logoColor: "#FFFFFF",
    selectColor: props.mainColor,
  };
  let backgroundColor;
  switch (props.mainColor) {
    case "red":
      backgroundColor = "#D34848";
      menu.logoColor = backgroundColor;
      break;
    case "blue":
      backgroundColor = "#1FE1E9";
      menu.logoColor = backgroundColor;
      break;
    case "yellow":
      backgroundColor = "#FFB33F";
      menu.logoColor = backgroundColor;
      break;
    case "black":
      menu.backgroundColor = "#1FE1E9";
      menu.logoColor = "#FFFFFF";
      backgroundColor = "#0B0B0B";
      break;
    default:
      menu.backgroundColor = "#0B0B0B";
      menu.logoColor = "#D34848";
      menu.selectColor = "red";
      backgroundColor = "#FFFFFF";
      menu.logoDefaultColor = "#0B0B0B";
      break;
  }
  const sectionStyle = {
    backgroundColor: backgroundColor,
    height: `${props.height}vh`,
    color: menu.logoDefaultColor,
  };
  const sectionRef = useRef(null);
  // console.log(sectionRef.current);
  return (
    <section
      id={props.sectionId}
      className={classes.section}
      style={sectionStyle}
      ref={sectionRef}
      onMouseEnter={() =>
        props.sectionOffsetTop &&
        props.sectionOffsetTop(sectionRef.current.offsetTop)
      }
    >
      <Menu
        backgroundColor={menu.backgroundColor}
        logoColor={menu.logoColor}
        selectColor={menu.selectColor}
        id={props.menuId}
      />
      {props.children}
      {/* {props.tryBtn && (
        <Link to="/pricing" className={classes["btn__try"]}>
          <button className="btn btn-color" content="TRY IT NOW">
            TRY IT NOW
          </button>
        </Link>
      )} */}
    </section>
  );
}
export default Section;
