import { Fragment } from "react";
import Payment from "../components/Layout/Payment/Payment";
import Footer from "../components/Layout/Footer/Footer";
function PaymentPage() {
  function componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidMount();
  return (
    <Fragment>
      <Payment />
      <Footer />
    </Fragment>
  );
}
export default PaymentPage;
