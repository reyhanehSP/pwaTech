
import { useEffect, useReducer } from "react";
import {
  GetProvince,
  GetCity,
} from "@/components/request/locationServices/_api/locationApi";
import { useRouter } from "next/navigation";
import useRegisterStore from "@/components/request/_store/_store";

const useLocation = () => {

  const route = useRouter()
  const initialState = {
    province: [],
    city: [],
    selectedID : null
  };
  
  const {updateProvince} = useRegisterStore()
  
  function reducer(state: any, action: any) {
    switch (action.type) {
      case "updateProvince":
        return { ...state, province: action.payload };
      case "updateCity":
        return { ...state, city: action.payload };
      case "updateID":
        return { ...state, selectedID: action.payload };
    }
  }
  const [{ province, city, selectedID }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(
    function () {
      GetProvince()
        .then((res) => {
          dispatch({ type: "updateProvince", payload: res.payload });
        })
        .catch((error) => console.log(error));
    },
    [dispatch]
  );


  const handleChangeProvince = (e: any) => {
    dispatch({ type: "updateID", payload: e });
    updateProvince(e);
    
    GetCity(e)
      .then((res) => {
        dispatch({ type: "updateCity", payload: res.payload });
      })
      .catch((error) => console.log(error));
  };
  const handleSubmit = () => {
    route.push('/request/entry')
  }
 
  return {

    province,
    city,
    selectedID,
    handleSubmit,
    handleChangeProvince,
    dispatch,
  };
};
export default useLocation;
