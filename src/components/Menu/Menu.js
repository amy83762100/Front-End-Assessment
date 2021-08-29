import { useRef } from "react";
import classes from "./Menu.module.scss";
import { Link } from "react-router-dom";
const Menu = (props) => {
  const checkbox = useRef(null);
  function closeMenu() {
    checkbox.current.checked = false;
  }
  function openMenu() {
    checkbox.current.checked = true;
  }
  return (
    <div className={classes.menu} onMouseLeave={closeMenu}>
      <input
        type="checkbox"
        className={classes.menu__checkbox}
        id={props.id}
        ref={checkbox}
      />

      <label
        htmlFor={props.id}
        className={classes.menu__button}
        data-logo-color={props.logoColor}
      >
        <span className={classes.menu__icon} onMouseOver={openMenu}>
          &nbsp;
        </span>
        <span className={classes.menu__logo}>EXP|CON</span>
      </label>
      <div
        className={classes.menu__background}
        style={{ color: props.backgroundColor }}
      >
        &nbsp;
      </div>
      <nav className={classes.menu__nav}>
        <ul className={classes.menu__list} data-color={props.selectColor}>
          <li className={classes.menu__item}>
            <Link to="/" className={classes.menu__link}>
              What is it
            </Link>
          </li>
          <li className={classes.menu__item}>
            <a href="#perks" className={classes.menu__link}>
              Perks
            </a>
          </li>
          <li className={classes.menu__item}>
            <Link to="/pricing" className={classes.menu__link}>
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
