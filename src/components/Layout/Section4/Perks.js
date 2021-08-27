import Section from "../Section";
import classes from "./Perks.module.scss";
function Perks(props) {
  return (
    <Section
      mainColor={props.mainColor}
      menuId={props.menuId}
      tryBtn={props.tryBtn}
      height={props.height}
      sectionId="Perks"
    >
      <div className={classes.perks}>
        <h1>Perks</h1>

        <div className={classes.content}>
          <div>
            <h2
              className={classes["item__red"]}
              style={{ color: props.titleColor }}
            >
              Subscription Payment Model
            </h2>
            <p style={{ color: props.textColor }}>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
          <div>
            <h2
              className={classes["item__blue"]}
              style={{ color: props.titleColor }}
            >
              No Fee Cancelation Policy
            </h2>
            <p style={{ color: props.textColor }}>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
          <div>
            <h2
              className={classes["item__yellow"]}
              style={{ color: props.titleColor }}
            >
              Subscription Payment Model
            </h2>
            <p style={{ color: props.textColor }}>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
export default Perks;