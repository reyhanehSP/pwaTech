import { useEffect, useReducer } from "react";
import { getSkills } from "@/components/request/choosingSpeciality/_api/specialityApi";
import useRegisterStore from "@/components/request/_store/_store";

const useChoosingSpeciality = () => {
  const initialState = {
    specialities: [],
    selectedSpecialities: [],
    query: "",
    isLoading: 0,
    valueHolder :""
  };

  const { updateSkills } = useRegisterStore();

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "changeQuery":
        if (state.query.length < 3) return {...state , isLoading : 1 ,query: action.payload, valueHolder : 'حداقل سه حرف باید وارد کنید'}
        return { ...state, query: action.payload , isLoading : 1 };
      case "ready":
        return { ...state, specialities: action.payload };
     
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
    updateSkills,
  };
};

export default useChoosingSpeciality;
