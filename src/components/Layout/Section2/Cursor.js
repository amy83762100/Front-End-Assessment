import { useRef, useEffect } from "react";
import classes from "./Cursor.module.scss";
function Cursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const mouseX = event.pageX - (window.innerWidth / 7) * 4 - 20;
      const mouseY =
        event.pageY - window.innerHeight - 200000 / window.innerWidth;
      if (cursorRef.current) {
        if (mouseX < 10)
          cursorRef.current.style.transform = `scale(${1 / (11 - mouseX)})`;
        else if (window.innerWidth - event.pageX < 140)
          cursorRef.current.style.transform = `scale(${
            1 / (141 - (window.innerWidth - event.pageX))
          })`;
        else if (mouseY < -1) {
          cursorRef.current.style.transform = `scale(${1 / -mouseY})`;
        } else if (mouseY > 150)
          cursorRef.current.style.transform = `scale(${1 / (mouseY - 149)})`;
        else {
          cursorRef.current.style.transform = `scale(${1})`;
        }
        console.log(cursorRef.current.offsetTop);
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
      // cursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
    });
  }, []);
  return (
    <div className={classes.cursor} ref={cursorRef}>
      Click
    </div>
  );
}
export default Cursor;
