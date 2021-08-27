import { Fragment } from "react";
import Perks from "../components/Layout/Section4/Perks";
import Footer from "../components/Layout/Footer/Footer";
import Pricing from "../components/Layout/Pricing/Pricing";
function PricingPage() {
  function componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidMount();
  return (
    <Fragment>
      <Pricing />
      <Perks
        mainColor="red"
        menuId="menu_pricing2"
        height="90"
        textColor="#0B0B0B"
        titleColor="#FFFFFF"
      />
      <Footer />
    </Fragment>
  );
}
export default PricingPage;
