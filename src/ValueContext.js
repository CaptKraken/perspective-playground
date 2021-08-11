import { createContext, useReducer } from "react";

const ValueContext = createContext();

export default ValueContext;

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

    default:
      break;
  }
};

const initState = {
  perspective: 0,
  rotateX: -180,
  rotateY: -180,
  rotateZ: -180,
};

export const ValueContextProvider = ({ children }) => {
  const [values, dispatch] = useReducer(valuesReducer, initState);

  return (
    <ValueContext.Provider value={{ values, dispatch }}>
      {children}
    </ValueContext.Provider>
  );
};
