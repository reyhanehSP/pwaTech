import { useEffect, useReducer } from "react";
import { getSkills } from "@/components/request/choosingSpeciality/_api/specialityApi";

const useChoosingSpeciality = () => {
  const initialState = {
    specialities: [],
    selectedSpecialities: [],
    query: "",
  };
  function reducer(state: any, action: any) {
    switch (action.type) {
      case "changeQuery":
        return { ...state, query: action.payload };
      case "ready":
        return { ...state, specialities: action.payload };
      case "updateSkill":
        if (action.payload[0]) {
          const exists = state.selectedSpecialities.some(
            (obj: any) => obj.ID === action.payload[1].ID
          );
          if (!exists) {
            return {
              ...state,
              selectedSpecialities: [
                ...state.selectedSpecialities,
                action.payload[1],
              ],
            };
          } else {
            return { ...state };
          } 
        } else {
          return {
            ...state,
            selectedSpecialities: state.selectedSpecialities.filter(
              (skill : any) => skill.ID !== action.payload[1].ID
            ),
          };
        }

      default:
        throw new Error("Unknown action");
    }
  }
  const [
    { specialities, selectedSpecialities, query, activeCurrStepIndex },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      query.length > 2
        ? getSkills(query)
            .then((res: any) => {
              dispatch({ type: "ready", payload: res.payload });
            })
            .catch((error) => console.log(error))
        : " ";
    },
    [query]
  );

  return {
    specialities,
    selectedSpecialities,
    query,
    activeCurrStepIndex,
    dispatch,
  };
};

export default useChoosingSpeciality;
