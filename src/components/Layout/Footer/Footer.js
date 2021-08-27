import Icon from "../../Icon/Icon";
import classes from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__email"]}>
        <Icon name={"mail"} color={"#fff"} size={23} />
        <p>support@experienceconcerts.co</p>
      </div>
      <div className={classes["footer__logo--box"]}>
        <h1 className={classes["footer__logo"]}>EXP|CON</h1>
        <small className={classes["footer__copyright"]}>
          2019 © All Rights Reserved | Speer Technologies Incorporated
        </small>
      </div>
    </footer>
  );
}
export default Footer;
