import React, { useReducer } from "react";
import CvDataReducer from "../reducers/CvDataReducer";

export const CvData = React.createContext();

let baseData = {
  personal: {
    name: "",
    surname: "",
    address: "",
    email: "",
    postcode: "",
    phone: "",
    resume: "",
    imagePath: "",
    position: "",
  },
  education: [
    {
      icon: "",
      name: "",
      from: "",
      to: "",
      position: "",
    },
  ],
  skills: [
    {
      icon: "",
      name: "",
      steps: 1,
      description: "",
    },
  ],
};

function CvDataProvider({ children }) {
  const [state, dispatch] = useReducer(CvDataReducer, JSON.parse(localStorage.getItem("data")) || baseData);

  return <CvData.Provider value={{ state, dispatch }}>{children}</CvData.Provider>;
}

export default CvDataProvider;
