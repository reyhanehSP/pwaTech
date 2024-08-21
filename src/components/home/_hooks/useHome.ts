import { useRouter } from "next/navigation";

const useHome = () => {
  const router = useRouter();
  const handleSubmit = (value: string) => {
    value === "login"  ? router.push("/login") : router.push("/request/speciality");
  };
  return {
    handleSubmit, 
  };
};
export default useHome;
