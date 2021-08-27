import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import MainLanding from "./pages/MainLanding";
import Payment from "./pages/Payment";
import "./App.scss";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact={true}>
          <MainLanding />
        </Route>
        <Route path="/pricing">
          <PricingPage />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
