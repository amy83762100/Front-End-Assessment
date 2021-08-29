import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../Section";
import BtnWhite from "../../Button/BtnWhite";
import music from "../../../assets/music.mp3";
import classes from "./Sound.module.scss";
import mediumLeft from "../../../assets/medium17@2x.png";
import mediumRight from "../../../assets/medium27@2x.png";
function Sound(props) {
  const audioContext = new AudioContext();
  const rightRef = useRef(null);
  const [parentOffsetTop, setParentOffsetTop] = useState(0);
  let audio;
  fetch(music)
    .then((data) => data.arrayBuffer())
    .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
    .then((decodedAudio) => {
      audio = decodedAudio;
    });

  function playMusic() {
    const playSound = audioContext.createBufferSource();
    playSound.buffer = audio;
    playSound.connect(audioContext.destination);
    if (audioContext.state === "suspended") {
      !audioContext.currentTime && playSound.start(audioContext.currentTime);
      audioContext.resume();
    } else if (audioContext.state === "running") {
      audioContext.suspend();
    }
  }

  const cursorRef = useRef(null);
  useEffect(() => {
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
        <div
          className={classes["red__right"]}
          onClick={playMusic}
          ref={rightRef}
        >
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
