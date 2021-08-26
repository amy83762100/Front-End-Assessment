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
    </section>
  );
}
export default Black;
