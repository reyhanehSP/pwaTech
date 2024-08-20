import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";

const apiKey = "61be9b1e";
const useChoosingSpeciality = () => {
  const [query, setQuery] = useState("");
  
  useEffect (function () {
    async function specialties() {
      try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
      );
      const data = await res.json()
      console.log(data)
      }
      catch {

      }
      finally {

      }
    }
    specialties();
  } ,[query])
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(" /information");
  };

  return {
    handleSubmit,
    query,
    setQuery,
  };
};
export default useChoosingSpeciality;
