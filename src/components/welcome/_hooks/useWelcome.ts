import { useRouter } from "next/navigation";

const useWelcome = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/main");
  };
  return {
    handleSubmit,
  };
};
export default useWelcome;
