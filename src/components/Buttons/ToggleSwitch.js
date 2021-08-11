import cssStyle from "./ToggleSwitch.module.css";
const ToggleSwitch = ({
  stretch = false,
  rounded = false,
  on,
  toggleOn,
  darkmode,
}) => {
  const classNames = `${cssStyle.switch} ${rounded ? cssStyle.rounded : ""} ${
    stretch ? cssStyle.stretch : ""
  } ${darkmode ? cssStyle.switchDarkMode : ""}`;

  const handleToggle = () => {
    toggleOn(!on);
  };

  if (on === undefined) {
    throw new Error(
      "don't forget to give prop 'on' to component ToggleSwitch."
    );
  }
  if (toggleOn === undefined) {
    throw new Error(
      "don't forget to give prop 'toggleOn' to component ToggleSwitch."
    );
  }

  return (
    <button className={classNames} onClick={handleToggle}>
      <input type="checkbox" checked={on} onChange={handleToggle} />
      <span className={cssStyle.slider}></span>
    </button>
  );
};

export default ToggleSwitch;
