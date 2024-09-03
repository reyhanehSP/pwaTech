import { useReducer, useState } from "react";
import {InformationType} from "@/components/request/informationExpert/_type/type"
// import {useInformation} from "@/components/informationExpert/_api/informationApi"
const useInformation = () => {
  
  const initialState = {
    firstName: "",
    lastName: "",
    nationalCode: 0,
    gender: 0,
    activity : null,
    activeCurState: null,
  };  

  function reducer (state : any , action : any) {
    switch (action.type) {
      case "handleFirstNameChange":
        return { ...state, firstName: action.payload, activeCurState: 2 };
      case "handleLastNameChange":
        return { ...state, lastName: action.payload, activeCurState: 2 };
      case "handleNationalCodeChange":
        return { ...state, nationalCode: action.payload, activeCurState: 2 };
      case "handleGenderChange":
        return { ...state, gender: action.payload, activeCurState: 2 };
      case "handleActivityChange":
        return { ...state, activity: action.payload, activeCurState: 2 };
    }
  }
  const [state , dispatch] = useReducer(reducer , initialState);

  // const [information, setInformation] = useState(initialInformation);
  // const handleFirstNameChange = (firstName: string) => {
  //   setInformation({ ...information, firstName: firstName });
  // };
  // const handleLastNameChange = (lastName : string) => {
  //   setInformation({ ...information, lastName: lastName });
  // };
  // const handleNationalCodeChange = (nationalCode: string) => {
  //   setInformation({ ...information, nationalCode: nationalCode });
  // };
  // const handleGenderChange = (gender: number) => {
  //   setInformation({ ...information, gender: gender });
  // };
  // const handleJobTypeChange = (job : number) => {
  //   setInformation({ ...information, jobType: job });
  // };
  // const router = useRouter();

  // const handleSubmit = (e : any) => {
  //   e.preventDefault();
  //    registerInformation(information);
  //    router.push("/request/locationServices");
  // };

  return {
   state,

 dispatch
  };
};
export default useInformation;
