import { useRouter } from "next/navigation";
import { useEffect, useReducer, useState } from "react";
import {GetProvince , GetCity} from "@/components/request/locationServices/_api/locationApi"
// import {LocationTypes} from "@/components/request/locationServices/_types/type"
const useLocation = () => {

const [selectedID , setSelectedID] = useState(0)
const [city , setCity] = useState("");
const router = useRouter()
const initialState = {
  province : []
};

function reducer (state : any , action : any) {
  switch (action.type) {
    case "updateProvince" : 
    return {...state , province : action.payload}
  }
}
const [{province} , dispatch] = useReducer (reducer , initialState)
    useEffect(
      function () {
        GetProvince()
          .then((res) => {
            dispatch({ type: "updateProvince", payload: res.payload });
          })
          .catch((error) => console.log(error));
      },[]
    );
    //  useEffect(
    //    function () {
    //      GetCity(2)
    //        .then((res) => {
    //          console.log(res);
    //        })
    //        .catch((error) => console.log(error));
    //    },
    //    [city]
    //  );
    const handleChangeProvince = (e : number) => {
      setSelectedID(e);
      console.log(e)
        GetCity(e)
          .then((res) => {
            setCity(res.payload);
            console.log("city", city);
          })
          .catch((error) => console.log(error));
        
    };
   
 const handleSubmit = () => {

   router.push('/users/entry');
 };
    return {
handleSubmit,
      province,
      city,
      setCity,
      selectedID,
      handleChangeProvince,
      dispatch
    };
}
export default useLocation;