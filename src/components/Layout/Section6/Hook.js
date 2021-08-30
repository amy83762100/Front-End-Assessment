import { Link } from "react-router-dom";
import Section from "../Section";
import classes from "./Hook.module.scss";
import btnStyle from "../../Button/Btn.module.scss";
function Hook() {
  return (
    // <section className={classes.hook}>
    //   <Menu
    //     backgroundColor="#1FE1E9"
    //     logoColor="white"
    //     selectColor="black"
    //     id="menu6"
    //   />
    <Section mainColor="black" menuId="menu6" tryBtn={false} height={75}>
      <div className={classes.hook}>
        <div className={classes["hook__left"]}>
          <h1>GET EXP|CON NOW</h1>
          <h2>Purchase and download the app.</h2>
        </div>
        <div className={classes["hook__right"]}>
          <Link to="/pricing">
            <button
              className={`${btnStyle.btn} ${btnStyle.btn__color}`}
              content="TRY IT NOW"
              style={{ transform: "scale(1.2)" }}
            >
              TRY IT NOW
            </button>
          </Link>
        </div>
      </div>
    </Section>
    // </section>
  );
}

export default Hook;
