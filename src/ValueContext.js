import { createContext, useReducer } from "react";

const ValueContext = createContext();

export default ValueContext;

const darkmode =
  JSON.parse(localStorage.getItem("perspectivedarkmode")) ?? true;

const initState = {
  perspective: 0,
  rotateX: -180,
  rotateY: -180,
  rotateZ: -180,
  darkmode,
};

const valuesReducer = (values, action) => {
  switch (action.type) {
    case "perspective":
      return { ...values, perspective: action.value };
    case "rotateX":
      return { ...values, rotateX: action.value };
    case "rotateY":
      return { ...values, rotateY: action.value };
    case "rotateZ":
      return { ...values, rotateZ: action.value };
    case "reset":
      return initState;
    case "toggleDarkMode": {
      return { ...values, darkmode: !values.darkmode };
    }

    default:
      break;
  }
};

export const ValueContextProvider = ({ children }) => {
  const [values, dispatch] = useReducer(valuesReducer, initState);

  return (
    <ValueContext.Provider value={{ values, dispatch }}>
      {children}
    </ValueContext.Provider>
  );
};
