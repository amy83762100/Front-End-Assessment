import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../Section";
import BtnWhite from "../../Button/BtnWhite";
import music from "../../../assets/music.mp3";
import classes from "./Sound.module.scss";
import mediumLeft from "../../../assets/medium17@2x.png";
import mediumRight from "../../../assets/medium27@2x.png";
function Sound(props) {
  const rightRef = useRef(null);
  const audioRef = useRef(null);
  const [parentOffsetTop, setParentOffsetTop] = useState(0);

  const cursorRef = useRef(null);
  useEffect(() => {
    // for legacy browsers
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    const track = audioContext.createMediaElementSource(audioRef.current);
    track.connect(audioContext.destination);
    rightRef.current.addEventListener(
      "click",
      (event) => {
        // check if context is in suspended state (autoplay policy)
        if (audioContext.state === "suspended") {
          audioContext.resume();
        }
        // play or pause track depending on state
        if (audioRef.current.dataset.playing === "false") {
          audioRef.current.play();
          audioRef.current.dataset.playing = "true";
        } else if (audioRef.current.dataset.playing === "true") {
          audioRef.current.pause();
          audioRef.current.dataset.playing = "false";
        }
        console.log(audioRef.current.dataset.playing);
      },
      false
    );
    audioRef.current.addEventListener(
      "ended",
      () => {
        audioRef.current.dataset.playing = "false";
      },
      false
    );
    document.addEventListener("mousemove", (event) => {
      if (cursorRef.current) {
        const mouseX = event.pageX - rightRef.current.offsetLeft - 40;
        const mouseY =
          event.pageY - window.innerHeight - rightRef.current.offsetTop - 40;
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
    });
  }, []);
  return (
    <Section
      mainColor="red"
      menuId="menu2"
      tryBtn="white"
      sectionOffsetTop={(parentOffsetTop) =>
        setParentOffsetTop(parentOffsetTop)
      }
    >
      <div className={classes.btn}>
        <Link to="/pricing" className={classes["btn__try"]}>
          <BtnWhite
            content="Try It Now"
            backgroundColor={"#1FE1E9"}
            offsetTop={parentOffsetTop}
          />
        </Link>
      </div>
      <div className={classes.red}>
        <div className={classes["red__left"]}>
          <h1>Superior Sound</h1>
          <h2>Experience live versions of your favorite songs.</h2>
          <BtnWhite
            content="See Demo"
            backgroundColor={"#1FE1E9"}
            offsetTop={parentOffsetTop}
          />
        </div>
        <div className={classes["red__right"]} ref={rightRef}>
          <audio src={music} ref={audioRef} data-playing="false"></audio>
          <img
            src={mediumLeft}
            alt="Left Speaker"
            className={classes["img__left"]}
          ></img>
          <img
            src={mediumRight}
            alt="Right Speaker"
            className={classes["img__right"]}
          ></img>

          <div className={classes.cursor} ref={cursorRef}>
            Click
          </div>
        </div>
      </div>
    </Section>
  );
}
export default Sound;
