import "./Background.css";

const Background = ({ click, show }) => {
  return show && <div className="background" onClick={click}></div>;
};

export default Background;