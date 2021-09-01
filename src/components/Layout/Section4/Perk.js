import classes from "./Perk.module.scss";
function Perk(props) {
  return (
    <div className={classes.perk}>
      <h2
        className={classes["perk__title"]}
        style={{ color: props.titleColor }}
      >
        {props.title}
      </h2>
      <p className={classes["perk__text"]}>
        No commitment, cancel anytime. Never worry about forgetting a payment
        again!
      </p>
    </div>
  );
}
export default Perk;
