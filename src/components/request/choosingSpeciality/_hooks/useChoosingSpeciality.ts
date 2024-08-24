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

  // const initialState: SpecialtiesType = {
  //   ID: 1,
  //   skillDesc: "نصب یخچال",
  // };
  const [query, setQuery] = useState("");
  const [specialities, setSpecialities] = useState<SpecialtiesType>([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(false);
  const [selectedID, setSelectedID] = useState();
  const [information, setInformation] = useState<SpecialtiesType>([]);
  const router = useRouter();

  useEffect(
    function () {
      query.length > 2
        ? getSkills(query)
            .then((res) => {
              setSpecialities(res.payload);
            })
            .catch((error) => console.log(error))
        : " ";
    },
    [query]
  );

  function handleAddSpeciality(checkedValue: boolean, item: SpecialtiesType) {
    const { ID: ID, skillDesc: skillDesc } = item;
    const newSpeciality = {
      ID,
      skillDesc,
    };
    console.log("newSpeciality", newSpeciality);

    if (checkedValue) {
      setInformation((prevObjects) => {
        const exists = prevObjects.some((obj) => obj.ID === newSpeciality.ID);
        if (!exists) {
          return [...prevObjects, newSpeciality]; // Add new object
        }
        return prevObjects; // Return previous state if ID exists
      });
    } else {
      setInformation((information) =>
        information.filter((information) => information.ID !== item.ID)
      );
    }
    console.log("information" , information)
  }
  console.log("info", information);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    registerInformation(information);
    router.push(" /request/information");
  };

  return {
    specialities,
    selectedSpeciality,
    setSelectedSpeciality,
    handleAddSpeciality,
    handleSubmit,
    query,
    setQuery,
  };
};

export default useChoosingSpeciality;
