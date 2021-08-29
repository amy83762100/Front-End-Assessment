function BtnWhite(props) {
  function changeColor(event) {
    let x = event.pageX - event.target.offsetLeft;
    let y = event.pageY - props.offsetTop - event.target.offsetTop;
    event.target.style.setProperty("--x", x + "px");
    event.target.style.setProperty("--y", y + "px");
  }
  return (
    <button className="btn btn-white" onMouseMove={changeColor}>
      <span>{props.content}</span>
    </button>
  );
}
export default BtnWhite;
