"use client";
import { useReducer } from "react";
import ChoosingSpeciality from "@/components/request/choosingSpeciality";
import InformationExpert from "@/components/request/informationExpert";
import LocationServices from "@/components/request/locationServices";
import style from '@/components/request/_styles/styles.module.scss'
import Progress from '@/components/common/Progress/index'
const InformationLevel = () => {
  const initialState = {
    skills: [],
    information: [],
    province: null,
    city: null,
    status: "level1",
    activeCurState : 1 ,
    index : 2
  };

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "ChoosingSpecialty":
        return { ...state, status : "level1" ,  skills: state.skills, activeCurState: 1 };
      case "InformationExpert":
        return {
          ...state,
          status: "level2",
          skills: action.payload,
          activeCurState : 2,
        };
      case "locationServices":
        return { ...state, status: "level3", activeCurState: 3 };
      case "finnalLevel":
        return { ...state, status: "level4" };
      default:
        throw new Error("invalid state");
    }
  }
  const [{ skills, status, activeCurState }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className={style.layout}>
      <Progress index={activeCurState} />
      {status === "level1" && (
        <ChoosingSpeciality
          nextLevel={dispatch}
          activeCurState={activeCurState}
        />
      )}
      {status === "level2" && (
        <InformationExpert
          nextLevel={dispatch}
          activeCurState={activeCurState}
        />
      )}
      {status === "level3" && (
        <LocationServices
          nextLevel={dispatch}
          activeCurState={activeCurState}
        />
      )}
    
    </div>
  );
};
export default InformationLevel;
