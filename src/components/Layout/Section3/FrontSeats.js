import { useRef, useEffect, useState } from "react";
import BtnWhite from "../../Button/BtnWhite";
import classes from "./FrontSeats.module.scss";
import Section from "../Section";
function FrontSeats() {
  const cursorRef = useRef(null);
  const [parentOffsetTop, setParentOffsetTop] = useState(0);
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      if (cursorRef.current) {
        const mouseX = event.pageX - 40;
        const mouseY = event.pageY - parentOffsetTop - 40;
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
    });
  }, [parentOffsetTop]);
  return (
    <Section
      mainColor="yellow"
      menuId="menu3"
      tryBtn={true}
      sectionOffsetTop={(parentOffsetTop) =>
        setParentOffsetTop(parentOffsetTop)
      }
    >
      <div className={classes["frontSeats__left"]}></div>
      <div className={classes["frontSeats__right"]}>
        <h1>FRONT ROW SEATS</h1>
        <h2>Experience concerts up close and personal.</h2>
        <BtnWhite content="SEE DEMO" offsetTop={parentOffsetTop} />
      </div>
      <div className={classes["frontSeats__image"]}>
        <div className={classes["frontSeats__image__fixed01"]}></div>
        <div className={classes["frontSeats__image__fixed02"]}></div>
        <div className={classes["frontSeats__image__fixed03"]}></div>
        <div
          className={classes["frontSeats__image__reveal"]}
          ref={cursorRef}
        ></div>
      </div>
    </Section>
  );
}
export default FrontSeats;
