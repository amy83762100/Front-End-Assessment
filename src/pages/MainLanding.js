import { Fragment } from "react";
import Header from "../components/Layout/Header/Header";
import Sound from "../components/Layout/Section2/Sound";
import FrontSeats from "../components/Layout/Section3/FrontSeats";
import Perks from "../components/Layout/Section4/Perks";
import Reviews from "../components/Layout/Section5/Reviews";
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
      <Sound />
      <FrontSeats />
      <Perks mainColor="black" menuId="menu4" tryBtn={true} />
      <Reviews />
      <Hook />
      <Footer />
    </Fragment>
  );
}
export default MainLanding;
