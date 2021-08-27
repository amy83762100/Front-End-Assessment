import { Fragment } from "react";
import Header from "../components/Layout/Header/Header";
import Red from "../components/Layout/Section2/Red";
import Yellow from "../components/Layout/Section3/Yellow";
import Perks from "../components/Layout/Section4/Perks";
import Blue from "../components/Layout/Section5/Blue";
import Hook from "../components/Layout/Section6/Hook";
import Footer from "../components/Layout/Footer/Footer";
function MainLanding() {
  function componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidMount();
  return (
    <Fragment>
      <Header />
      <Red />
      <Yellow />
      <Perks mainColor="black" menuId="menu4" tryBtn={true} />
      <Blue />
      <Hook />
      <Footer />
    </Fragment>
  );
}
export default MainLanding;
