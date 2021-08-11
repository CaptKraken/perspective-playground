import { useContext, useRef, useState } from "react";
import ValueContext from "../ValueContext";
import cssStyle from "./Copy.module.css";

const Copy = () => {
  const {
    values: { perspective, rotateX, rotateY, rotateZ },
  } = useContext(ValueContext);
  const [copyText, setcopyText] = useState("");
  const textRef = useRef();
  const handleCopy = () => {
    navigator.clipboard.writeText(textRef.current.textContent);
    setcopyText("copied");
    setTimeout(() => {
      setcopyText("");
    }, 2000);
  };

  return (
    <>
      <div className={cssStyle.textWrapper}>
        <p ref={textRef}>
          transform: perspective({perspective}px) rotateX({rotateX}deg) rotateY(
          {rotateY}deg) rotateZ({rotateZ}deg);
        </p>
        <button className={cssStyle.copyBtn} onClick={handleCopy}>
          <svg
            viewBox="0 0 1000 1000"
            height="15"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <title>Copy to Clipboard</title>
            <path d="M704 896H64V320h640v192h64V192c0-35-29-64-64-64H512C512 57 455 0 384 0S256 57 256 128H64c-35 0-64 29-64 64v704c0 35 29 64 64 64h640c35 0 64-29 64-64V768h-64v128zM192 192h64s64-29 64-64 29-64 64-64 64 29 64 64 32 64 64 64h64s64 29 64 64H128c0-39 28-64 64-64zm-64 512h128v-64H128v64zm448-128V448L320 640l256 192V704h320V576H576zM128 832h192v-64H128v64zm320-448H128v64h320v-64zM256 512H128v64h128v-64z" />
          </svg>
        </button>
      </div>
      {copyText && <p className={cssStyle.copyText}>{copyText}</p>}
    </>
  );
};

export default Copy;
