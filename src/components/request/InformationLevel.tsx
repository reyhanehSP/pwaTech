"use client";
import { useReducer } from "react";
import ChoosingSpeciality from "@/components/request/choosingSpeciality";
import InformationExpert from "@/components/request/informationExpert";
import LocationServices from "@/components/request/locationServices";
const InformationLevel = () => {
  const initialState = {
    skills: [],
    information: [],
    province: null,
    city: null,
    status: "level1",
  };

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "ChoosingSpecialty":
        return { ...state, skills: state.skills };
      case "InformationExpert":
        return { ...state, status: "level2", skills: action.payload };
      case "locationServices":
        return { ...state, status: "level3" };
      case "finnalLevel":
        return { ...state, status: "level4" };
      default:
        throw new Error("invalid state");
    }
  }
  const [{ skills , status }, dispatch] = useReducer(reducer, initialState);
  console.log(skills)
  return (
    <>
      {status === "level1" && <ChoosingSpeciality nextLevel = {dispatch}/>}
      {status === "level2" && <InformationExpert dispatch={dispatch} />}
      {status === "level3" && <LocationServices />}
    </>
  );
};
export default InformationLevel;
