import { Link } from "react-router-dom";
import Menu from "../../Menu/Menu";
import classes from "./Hook.module.scss";
function Hook() {
  return (
    <section className={classes.hook}>
      <Menu
        backgroundColor="#1FE1E9"
        logoColor="white"
        selectColor="black"
        id="menu6"
      />
      <div className={classes["hook__left"]}>
        <h1>GET EXP|CON NOW</h1>
        <h2>Purchase and download the app.</h2>
      </div>
      <Link to="/Pricing" className={classes["btn__try"]}>
        <button className="btn btn-color">TRY IT NOW</button>
      </Link>
    </section>
  );
}

export default Hook;
