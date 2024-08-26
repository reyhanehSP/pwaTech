import { useReducer, useState } from "react";
import {InformationType} from "@/components/request/informationExpert/_type/type"
// import {useInformation} from "@/components/informationExpert/_api/informationApi"
const useInformation = () => {
  
  const initialState  = {
    information: [] ,
  
  };  

  function reducer (state : any , action : any) {
    switch (action.type) {
        case "updateInformation" :
          return {...state , information : action.payload}
   
    }
  }
  const [{information } , dispatch] = useReducer(reducer , initialState);

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
    information,

 dispatch
  };
};
export default useInformation;
