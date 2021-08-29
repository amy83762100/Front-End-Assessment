import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnWhite from "../../Button/BtnWhite";
import classes from "./FrontSeats.module.scss";
import Section from "../Section";
function FrontSeats() {
  const cursorRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const [parentOffsetTop, setParentOffsetTop] = useState(0);
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      if (cursorRef.current) {
        const mouseX = event.pageX - 40;
        const mouseY = event.pageY - parentOffsetTop - 40;
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
        const mouseRelativeH1X = mouseX - h1Ref.current.offsetLeft;
        const mouseRelativeH1Y = mouseY - h1Ref.current.offsetTop;
        const mouseRelativeH2X = mouseX - h2Ref.current.offsetLeft;
        const mouseRelativeH2Y = mouseY - h2Ref.current.offsetTop;

        let diameterOffsetBig = 170,
          diameterOffsetSmall = 0;
        if (mouseRelativeH1Y > -160 && mouseRelativeH1Y < -5) {
          diameterOffsetBig = 210;
          diameterOffsetSmall = 10;
        }
        console.log();
        for (let i = 0; i < h2Ref.current.children.length; i++) {
          if (i < h1Ref.current.children.length) {
            if (
              mouseRelativeH1X + 40 > 0 &&
              h1Ref.current.children[i].offsetLeft <
                mouseRelativeH1X + diameterOffsetBig &&
              h1Ref.current.children[i].offsetLeft >
                mouseRelativeH1X - diameterOffsetSmall &&
              mouseRelativeH1Y - diameterOffsetSmall < 0 &&
              mouseRelativeH1Y + diameterOffsetBig > 0
            ) {
              h1Ref.current.children[i].style.color = "#2DDBBA";
            } else {
              h1Ref.current.children[i].style.color = "#FFFFFF";
            }
          }
          if (
            mouseRelativeH2X + 40 > 0 &&
            h2Ref.current.children[i].offsetLeft <
              mouseRelativeH2X + diameterOffsetBig &&
            h2Ref.current.children[i].offsetLeft >
              mouseRelativeH2X - diameterOffsetSmall &&
            mouseRelativeH2Y - diameterOffsetSmall < 0 &&
            mouseRelativeH2Y + diameterOffsetBig > 0
          ) {
            h2Ref.current.children[i].style.color = "#3EE6F4";
          } else {
            h2Ref.current.children[i].style.color = "#191919";
          }
        }
      }
    });
  }, [parentOffsetTop]);
  const h2str = "Experience concerts up close and personal.";
  let h2El = new Array(h2str.length / 2);
  for (let i = 0; i + 2 <= h2str.length; i += 2) {
    const subStr = h2str.substring(i, i + 2);
    const spanEl = <span key={i}>{subStr}</span>;
    h2El.push(spanEl);
  }
  return (
    <Section
      mainColor="yellow"
      menuId="menu3"
      tryBtn={true}
      sectionOffsetTop={(parentOffsetTop) =>
        setParentOffsetTop(parentOffsetTop)
      }
    >
      <div className={classes.btn}>
        <Link to="/pricing" className={classes["btn__try"]}>
          <BtnWhite
            content="Try It Now"
            backgroundColor={"#D34848"}
            offsetTop={parentOffsetTop}
          />
        </Link>
      </div>
      <div className={classes.frontSeats}>
        <div className={classes["frontSeats__left"]}></div>
        <div className={classes["frontSeats__right"]}>
          <h1 ref={h1Ref}>
            {[..."FRONT ROW SEATS"].map((el, i) => (
              <span key={i}>{el}</span>
            ))}
          </h1>

          <h2 ref={h2Ref}>
            {/* {[..."Experience concerts up close and personal."].map((el, i) => (
              <span key={i}>{el}</span>
            ))} */}
            {[...h2El]}
          </h2>
          <BtnWhite
            content="SEE DEMO"
            backgroundColor={"#D34848"}
            offsetTop={parentOffsetTop}
          />
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
      </div>
    </Section>
  );
}
export default FrontSeats;
