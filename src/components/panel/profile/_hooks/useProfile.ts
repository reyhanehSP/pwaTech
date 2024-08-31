import { useRouter } from "next/navigation";
import {useState} from "react"
const useProfile = () => {
     const [files, setFiles] = useState([]);

       const router = useRouter();
       const handleSubmit = (value: string) => {
         router.push("/register");
       };
    return {
      files,
      setFiles,
      handleSubmit,
    };
}
export default useProfile