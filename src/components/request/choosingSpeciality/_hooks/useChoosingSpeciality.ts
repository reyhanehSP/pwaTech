import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
import { getSkills } from "@/components/request/choosingSpeciality/_api/specialityApi";
import { SpecialtiesType } from "@/components/request/choosingSpeciality/_types/type";
import useInformation from "@/components/request/_store/_store";

const useChoosingSpeciality = () => {
  const registerInformation = useInformation(
    (state) => state.registerInformation
  );

  const [query, setQuery] = useState("");
  const [specialities, setSpecialities] = useState<SpecialtiesType>({});
  const [selectedSpeciality, setSelectedSpeciality] = useState(false);
  const [information, setInformation] = useState<SpecialtiesType>({});
  const router = useRouter();

  useEffect(
    function () {
      query.length > 2
        ? getSkills(query)
            .then((res) => {
              setSpecialities(res.payload);
              console.log(specialities);
            })
            .catch((error) => console.log(error))
        : " ";
    },
    [query]
  );

  const handleAddSpeciality = (checkedValue: boolean, item: object) => {
    const { ID: id, skillDesc: skilldesc } = item;
    const newSpeciality = {
      id,
      skilldesc,
    };
    console.log(id, skilldesc);
    setSelectedSpeciality(checkedValue);
    console.log("information", information);
 
    if (checkedValue) {
      setInformation((information) => [...information, newSpeciality]);
    }
       const istrue = information
         .map((information) => information.ID)
         .includes(item.ID);
       console.log("isTrue", istrue);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    registerInformation(information);
    router.push(" /request/information");
  };

  return {
    specialities,
    selectedSpeciality,
    setSelectedSpeciality,
    handleSubmit,
    query,
    setQuery,
    handleAddSpeciality,
  };
};

export default useChoosingSpeciality;
