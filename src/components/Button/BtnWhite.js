function BtnWhite(props) {
  function changeColor(event) {
    let x = event.pageX - event.target.offsetLeft;
    event.target.style.setProperty("--x", x + "px");
    event.target.style.setProperty("--y", 20 + "px");
  }
  return (
    <button className="btn btn-white" onMouseMove={changeColor}>
      <span>{props.content}</span>
    </button>
  );
}
export default BtnWhite;
