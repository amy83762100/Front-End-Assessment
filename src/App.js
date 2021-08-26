import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import MainLanding from "./pages/MainLanding";
import Pricing from "./pages/Pricing";
import Payment from "./pages/Payment";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact={true}>
          <MainLanding />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
