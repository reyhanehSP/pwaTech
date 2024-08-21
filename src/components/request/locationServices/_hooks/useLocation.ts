import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {GetProvince , GetCity} from "@/components/request/locationServices/_api/locationApi"
import {LocationTypes} from "@/components/request/locationServices/_types/type"
const useLocation = () => {
const [province, setProvince] = useState<LocationTypes>([]);
const [provinceName , setProvinceName] = useState("")
const [selectedID , setSelectedID] = useState(0)
const [city , setCity] = useState("");

    useEffect(
      function () {
        GetProvince()
          .then((res) => {
            setProvince(res.payload);
            console.log("province", province);
          })
          .catch((error) => console.log(error));
      },[]
    );
    //  useEffect(
    //    function () {
    //      GetCity(2)
    //        .then((res) => {
    //          console.log(res);
    //        })
    //        .catch((error) => console.log(error));
    //    },
    //    [city]
    //  );
    const handleChangeProvince = (e : number) => {
      setSelectedID(e);
      console.log(e)
        GetCity(e)
          .then((res) => {
            setCity(res.payload);
            console.log("city", city);
          })
          .catch((error) => console.log(error));
        
    };
    const router = useRouter();
    const handleSubmit = () => {
      router.push("/register");
    };

    return {
      handleSubmit,
      province,
      setProvince,
      city,
      setCity,
      provinceName,
      selectedID,
      handleChangeProvince,
    };
}
export default useLocation;