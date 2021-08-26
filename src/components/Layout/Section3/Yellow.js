import Menu from "../../Menu/Menu";
import BtnWhite from "../../Button/BtnWhite";
import classes from "./Yellow.module.scss";
function Yellow() {
  return (
    <section className={classes.yellow}>
      <Menu
        backgroundColor="#0B0B0B"
        logoColor="yellow"
        selectColor="yellow"
        id="menu3"
      />
      <div className={classes["yellow__left"]}></div>
      <div className={classes["yellow__right"]}>
        <h1>FRONT ROW SEATS</h1>
        <h2>Experience concerts up close and personal.</h2>
        <BtnWhite content="SEE DEMO" />
      </div>
    </section>
  );
}
export default Yellow;
