import cssStyle from "./Slider.module.css";

const Slider = ({ name, min, max, value, onChange }) => {
  return (
    <div className={cssStyle.sliderContainer}>
      <label className={cssStyle.sliderLabel} htmlFor={name}>
        {name}
      </label>
      <input
        className="slider"
        id={name}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />{" "}
      <span className={cssStyle.sliderValue}>{value}</span>
    </div>
  );
};

export default Slider;
