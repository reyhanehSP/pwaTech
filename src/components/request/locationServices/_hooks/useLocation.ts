
import { useEffect, useReducer } from "react";
import {
  GetProvince,
  GetCity,
} from "@/components/request/locationServices/_api/locationApi";
import { useRouter } from "next/navigation";

// import {LocationTypes} from "@/components/request/locationServices/_types/type"
const useLocation = () => {

  const route = useRouter()
  const initialState = {
    province: [],
    city: [],
    selectedID : null
  };


  
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


  const handleChangeProvince = (e: number) => {
    dispatch({ type: "updateID", payload: e });
    GetCity(e)
      .then((res) => {
        dispatch({ type: "updateCity", payload: res.payload });
      })
      .catch((error) => console.log(error));
  };
  const handleSubmit = () => {
    route.push('/tech/entry')
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
