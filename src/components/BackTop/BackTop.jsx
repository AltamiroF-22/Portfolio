import ArrowUp from "../../svg/ArrowUp.svg";
import MagnetoCircle from "../MagnetoCircle/MagnetoCircle";
import "./BackTop.sass";

const BackTop = () => {
  return (
    <div className="btn">
      <MagnetoCircle cursor={'pointer'} backgroundColor={"orange"} size={"small"} img={ArrowUp} position={'fixed'} />
    </div>
  );
};

export default BackTop;
