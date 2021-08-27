import Section from "../Section";
import Plan from "./Plan";
import classes from "./Pricing.module.scss";

function Pricing(props) {
  const Plan01 = {
    color: "#D24848",
    name: "Basic",
    period: "Monthly",
    price: "9",
    feature01: "Very good",
    feature02: "Amazing",
    feature03: "Perfect job",
    feature04: "Love this",
    feature05: "It's so good",
    feature06: "Features",
  };
  const Plan02 = {
    color: "#FFB33F",
    name: "Advanced",
    period: "Yearly",
    price: "99",
    feature01: "Very very good",
    feature02: "Even Amazing",
    feature03: "Perfect job",
    feature04: "Love this more",
    feature05: "It's so so good",
    feature06: "More Features",
  };
  const Plan03 = {
    color: "#1FE1E9",
    name: "Pro",
    period: "Yearly",
    price: "120",
    feature01: "Very very good",
    feature02: "Even more",
    feature03: "Perfect job",
    feature04: "Love this more",
    feature05: "It's so so good",
    feature06: "More Features",
  };
  return (
    <Section mainColor="black" menuId="menu_pricing1" height="175">
      <div className={classes.pricing}>
        <div>
          <h1 className={classes.title}>Pricing</h1>
          <p className={classes.subtitle}>
            Test out our app today! Choose from three subscription Based payment
            models.
          </p>
        </div>
        <div className={classes.plans}>
          <Plan content={Plan01} />
          <Plan content={Plan02} />
          <Plan content={Plan03} />
        </div>
      </div>
    </Section>
  );
}
export default Pricing;
