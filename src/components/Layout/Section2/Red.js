import { Link } from "react-router-dom";
import Menu from "../../Menu/Menu";
import Cursor from "./Cursor";
import BtnWhite from "../../Button/BtnWhite";
import music from "../../../assets/music.mp3";
import classes from "./Red.module.scss";
import mediumLeft from "../../../assets/medium17@2x.png";
import mediumRight from "../../../assets/medium27@2x.png";
function Red(props) {
  const audioContext = new AudioContext();

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
      playSound.start(audioContext.currentTime);
    }
    if (audioContext.state === "running") {
      audioContext.suspend();
    } else audioContext.resume();
  }
  return (
    <section className={classes.red}>
      <Menu
        backgroundColor="#0B0B0B"
        logoColor="red"
        selectColor="red"
        id="menu2"
      />
      <div className={classes["red__left"]}>
        <h1>Superior Sound</h1>
        <h2>Experience live versions of your favorite songs.</h2>
        <BtnWhite content="See Demo" />
      </div>
      <div className={classes["red__right"]} onClick={playMusic}>
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
        <Cursor />
      </div>
      <Link to="/Pricing" className={classes["btn__try"]}>
        <button className="btn btn-color">TRY IT NOW</button>
      </Link>
    </section>
  );
}
export default Red;
