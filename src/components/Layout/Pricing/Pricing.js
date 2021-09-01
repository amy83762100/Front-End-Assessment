import Section from "../Section";
import Plan from "./Plan";
import classes from "./Pricing.module.scss";

function Pricing(props) {
  const Plan01 = {
    color: "#D24848",
    name: "Basic",
    period: "Monthly",
    price: "9",
    feature: [
      "Very good",
      "Amazing",
      "Perfect job",
      "Love this",
      "It's so good",
      "Features",
    ],
  };
  const Plan02 = {
    color: "#FFB33F",
    name: "Advanced",
    period: "Yearly",
    price: "99",
    feature: [
      "Very very good",
      "Even Amazing",
      "Perfect job",
      "Love this more",
      "It's so so good",
      "More Features",
    ],
  };
  const Plan03 = {
    color: "#1FE1E9",
    name: "Pro",
    period: "Yearly",
    price: "120",
    feature: [
      "Very very good",
      "Even more",
      "Perfect job",
      "Love this more",
      "It's so so good",
      "More Features",
    ],
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
