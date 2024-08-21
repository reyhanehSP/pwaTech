import { useRouter } from "next/navigation";
import { useState } from "react";
import useInformationExper from "@/components/request/_store/_store";
// import {useInformation} from "@/components/informationExpert/_api/informationApi"
const useInformation = () => {
     const registerInformation = useInformationExper(
      (state) => state.registerInformation
     );
  const initialInformation = {
    firstName: "",
    lastName: "",
    nationalCode: "",
    gender: 0,
    jobType: 0
  };
  const [information, setInformation] = useState(initialInformation);
  const handleFirstNameChange = (firstName: string) => {
    setInformation({ ...information, firstName: firstName });
  };
  const handleLastNameChange = (lastName : string) => {
    setInformation({ ...information, lastName: lastName });
  };
  const handleNationalCodeChange = (nationalCode: string) => {
    setInformation({ ...information, nationalCode: nationalCode });
  };
  const handleGenderChange = (gender: number) => {
    setInformation({ ...information, gender: gender });
  };
  const handleJobTypeChange = (job : number) => {
    setInformation({ ...information, jobType: job });
  };
  const router = useRouter();

  const handleSubmit = (e : any) => {
    e.preventDefault();
     registerInformation(information);
     router.push("/request/locationServices");
  };

  return {
    information,
    handleFirstNameChange,
    handleLastNameChange,
    handleNationalCodeChange,
    handleGenderChange,
    handleJobTypeChange,
    handleSubmit,
  };
};
export default useInformation;
