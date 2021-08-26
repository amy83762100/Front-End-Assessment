import { Link } from "react-router-dom";
import Menu from "../../Menu/Menu";
import classes from "./Black.module.scss";
function Black() {
  return (
    <section className={classes.black}>
      <Menu
        backgroundColor="#1FE1E9"
        logoColor="white"
        selectColor="black"
        id="menu4"
      />
      <h1>Perks</h1>
      <div className={classes.content}>
        <div className={classes["item__red"]}>
          <h2>Subscription Payment Model</h2>
          <p>
            No commitment, cancel anytime. Never worry about forgetting a
            payment again!
          </p>
        </div>
        <div className={classes["item__blue"]}>
          <h2>No Fee Cancelation Policy</h2>
          <p>
            No commitment, cancel anytime. Never worry about forgetting a
            payment again!
          </p>
        </div>
        <div className={classes["item__yellow"]}>
          <h2>Subscription Payment Model</h2>
          <p>
            No commitment, cancel anytime. Never worry about forgetting a
            payment again!
          </p>
        </div>
      </div>
      <Link to="/Pricing" className={classes["btn__try"]}>
        <button className="btn btn-color">TRY IT NOW</button>
      </Link>
    </section>
  );
}
export default Black;
