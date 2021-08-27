import classes from "./Review.module.scss";
import Icon from "../../Icon/Icon";
function Review(props) {
  return (
    <div className={classes.review}>
      <div className={classes["review__stars"]}>
        {[...Array(5)].map((el, i) => (
          <Icon name={"star-full"} color={"#000000"} size={23} key={i} />
        ))}
      </div>
      <h1 className={classes["review__title"]}>{props.title}</h1>
      <q>Love it, it’s the Best.I can’t live without it!</q>
    </div>
  );
}
export default Review;
