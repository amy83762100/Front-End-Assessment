import Icon from "../../Icon/Icon";
import classes from "./Plan.module.scss";
import { Link } from "react-router-dom";
import btnStyle from "../../Button/Btn.module.scss";
function Plan(props) {
  const icon = {
    name: "music_note",
    color: "#FFFFFF",
    size: 17,
  };
  return (
    <div className={classes.plan} style={{ color: props.content.color }}>
      <h3 className={classes["plan__name"]}>{props.content.name}</h3>
      <h2 className={classes["plan__period"]}>{props.content.period}</h2>
      <big className={classes["plan__price"]}>&#36;{props.content.price}</big>
      <ul className={classes["plan__features"]}>
        <li>
          <Icon name={icon.name} color={icon.color} size={icon.size} />
          <span>{props.content.feature01}</span>
        </li>
        <li>
          <Icon name={icon.name} color={icon.color} size={icon.size} />
          <span>{props.content.feature02}</span>
        </li>
        <li>
          <Icon name={icon.name} color={icon.color} size={icon.size} />
          <span>{props.content.feature03}</span>
        </li>
        <li>
          <Icon name={icon.name} color={icon.color} size={icon.size} />
          <span>{props.content.feature04}</span>
        </li>
        <li>
          <Icon name={icon.name} color={icon.color} size={icon.size} />
          <span>{props.content.feature05}</span>
        </li>
        <li>
          <Icon name={icon.name} color={icon.color} size={icon.size} />
          <span>{props.content.feature06}</span>
        </li>
      </ul>
      <Link to="/payment" className={classes["btn__select"]}>
        <button
          className={btnStyle.btn}
          style={{ backgroundColor: props.content.color }}
        >
          Select
        </button>
      </Link>
    </div>
  );
}
export default Plan;
