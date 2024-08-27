import { useRouter } from "next/navigation";
import { useEffect, useReducer, useState } from "react";
import {
  GetProvince,
  GetCity,
} from "@/components/request/locationServices/_api/locationApi";
import { resolve } from "styled-jsx/css";
// import {LocationTypes} from "@/components/request/locationServices/_types/type"
const useLocation = () => {
  const [selectedID, setSelectedID] = useState(0);
  const [city, setCity] = useState([]);
  const router = useRouter();
  const initialState = {
    province: [],
  };

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "updateProvince":
        return { ...state, province: action.payload };
    }
  }
  const [{ province }, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    GetProvince()
      .then((res) => {
        dispatch({ type: "updateProvince", payload: res.payload });
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChangeProvince = (e: number) => {
    setSelectedID(e);
    GetCity(e)
      .then((res) => {
        setCity(res.payload);
        console.log(res.payload)
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = () => {
    router.push("/tech/entry");
  };
  return {
    handleSubmit,
    province,
    city,
    setCity,
    selectedID,
    handleChangeProvince,
    dispatch,
  };
};
export default useLocation;
