import { Link } from "react-router-dom";
import Section from "../Section";
import Perk from "./Perk";
import classes from "./Perks.module.scss";
import btnStyle from "../../Button/Btn.module.scss";
function Perks(props) {
  let titleColor = {
    titleColor01: props.titleColor || "#d24848",
    titleColor02: props.titleColor || "#1fe1e9",
    titleColor03: props.titleColor || "#ffb33f",
  };
  return (
    <Section
      mainColor={props.mainColor}
      menuId={props.menuId}
      tryBtn={props.tryBtn}
      height={props.height}
      sectionId="perks"
    >
      <div className={classes.btn}>
        {props.tryBtn && (
          <Link to="/pricing" className={classes["btn__try"]}>
            <button
              className={`${btnStyle.btn} ${btnStyle.btn__color}`}
              content="TRY IT NOW"
            >
              TRY IT NOW
            </button>
          </Link>
        )}
      </div>
      <div className={classes.perks}>
        <h1>Perks</h1>
        <div className={classes.content} style={{ color: props.textColor }}>
          <Perk
            title="Subscription Payment Model"
            titleColor={titleColor.titleColor01}
          />
          <Perk
            title="No Fee Cancellation Policy"
            titleColor={titleColor.titleColor02}
          />
          <Perk
            title="Subscription Payment Model"
            titleColor={titleColor.titleColor03}
          />
        </div>
      </div>
    </Section>
  );
}
export default Perks;
