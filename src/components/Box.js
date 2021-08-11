import { useContext } from "react";
import ValueContext from "../ValueContext";
import cssStyle from "./Box.module.css";
const Box = () => {
  const {
    values: { perspective, rotateX, rotateY, rotateZ },
  } = useContext(ValueContext);

  return (
    <div
      className={cssStyle.box}
      style={{
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
      }}
    />
  );
};

export default Box;
