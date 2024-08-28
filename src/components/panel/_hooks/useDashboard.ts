import { useRouter } from "next/navigation";
import { useState } from "react";

const useDashboard = () => {
const route = useRouter();

  const [value, setValue] = useState();
  function handleSubmit(url : string) {
    route.push(url);
  }

  return { value, setValue, handleSubmit };
};
export default useDashboard;
