import useRegisterStore from "@/components/request/_store/_store";

const useInformation = () => {
  const { updateInformation } = useRegisterStore();
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    updateInformation(name, value);
  };
  return {
    handleChange,
  };
};
export default useInformation;
