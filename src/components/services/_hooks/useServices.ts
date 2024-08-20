import { useRouter } from "next/navigation";
const useServices = () => {

    const router = useRouter();

    const handleSubmit = () => {
      router.push("/register");
    };

    return {
      handleSubmit,
    };
}
export default useServices