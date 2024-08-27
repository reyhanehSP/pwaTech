import { useEffect, useReducer } from "react";
import { getSkills } from "@/components/request/choosingSpeciality/_api/specialityApi";

const useChoosingSpeciality = () => {
  const initialState = {
    specialities: [],
    selectedSpecialities: [],
    query: "",
    isLoading: 0,
    valueHolder :""
  };
  function reducer(state: any, action: any) {
    switch (action.type) {
      case "changeQuery":
        if (state.query.length < 3) return {...state , query: action.payload, valueHolder : 'حداقل سه حرف باید وارد کنید'}
        return { ...state, query: action.payload , isLoading : 1 };
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
              (skill: any) => skill.ID !== action.payload[1].ID
            ),
          };
        }
      case "setLoading":
        return { ...state, isLoading: action.payload };

      default:
        throw new Error("Unknown action");
    }
  }
  const [
    {
      specialities,
      selectedSpecialities,
      query,
      isLoading,
      activeCurrStepIndex,
      valueHolder,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    
    function () {
    
      query.length > 2
        ? getSkills(query)
            .then((res: any) => {
              dispatch({ type: "ready", payload: res.payload });
              dispatch({ type: "setLoading", payload: 0 });
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
    isLoading,
    activeCurrStepIndex,
    valueHolder,
    dispatch,
  };
};

export default useChoosingSpeciality;
