import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { sendSMS, verifySMS } from "@/components/request/entry/_api/loginApi";
import { toast } from "react-toastify";
import style from "@/components/request/entry/entry.module.scss";
import useRegisterStore from "@/components/request/_store/_store";

const useEntry = () => {
  const router = useRouter();
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [currStep, setCurrStep] = useState<number>(1);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState(false);
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState<boolean>(true);
  const [statusOtp, setStatusOtp] = useState("");
  const [wrapperY, setWrapperY] = useState(200);
  const [checkRules, setCheckRules] = useState(false);

  const { skills, informations, province } = useRegisterStore();

  useEffect(() => {
    //calculate div animate

    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const wrapperElement = document.querySelector(
        `.${style.wrapper}`
      ) as HTMLElement | null;
      if (wrapperElement) {
        const wrapperHeight = wrapperElement.offsetHeight;
        const yPosition = Math.max(20, windowHeight - wrapperHeight - 40);
        setWrapperY(yPosition);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleChangeOtp = (newValue: string) => {
    setOtp(newValue);
    if (otp.length <= 6) {
      setEnteredOtp(false);
    }
  };
  const handleChangeRule = (value: boolean) => {
    setCheckRules(value);
    if (!value) setEnteredPhoneNumber(false);
  };
  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumberIsValid(true);
    let phoneNumber = e.target.value;
    setPhoneNumber(phoneNumber.replace(/[^0-9]/g, ""));
    setEnteredPhoneNumber(false);
    if (
      (phoneNumber.length === 10 || phoneNumber.length === 11) &&
      checkRules === true
    ) {
      setEnteredPhoneNumber(true);
    }
  };
  const handlePhoneNumber = () => {
    const mobileRegx = /^0?9\d{9}$/;
    if (mobileRegx.test(phoneNumber)) {
      sendSMS(phoneNumber)
        .then(() => {
          setCurrStep(2);
          setInputIsFocused(true);
        })
        .catch(() => {
          setPhoneNumberIsValid(false);
        });
    } else {
      setEnteredPhoneNumber(false);
      setPhoneNumberIsValid(false);
    }
  };
  const handleVerifyCode = () => {
    verifySMS(phoneNumber, otp)
      .then((res) => {
        if (res.statusCode === 0) {
          const finalObject = {
            "skills": skills,
            "informations": informations,
            "province": province,
            "tel": phoneNumber,
          };
          console.log(finalObject);
           router.push("/welcome");
        } else {
          toast.error(res.message);
          setStatusOtp("red");
        }
      })
      .catch(() => {
        toast.error("لطفا اینترنت خود را چک کنید.");
      });
  };
  const handleFocus = () => {
    document.body.style.overflow = "hidden";
    setInputIsFocused(true);
    window.scrollTo(0, 0);
  };

  const handleBlur = () => {
    document.body.style.overflow = "auto";
    setInputIsFocused(false);
  };

  return {
    inputIsFocused,
    setInputIsFocused,
    enteredPhoneNumber,
    setEnteredPhoneNumber,
    phoneNumber,
    setPhoneNumber,
    currStep,
    setCurrStep,
    otp,
    setOtp,
    enteredOtp,
    setEnteredOtp,
    handleChangeOtp,
    handleChangePhoneNumber,
    handlePhoneNumber,
    handleVerifyCode,
    setStatusOtp,
    statusOtp,
    wrapperY,
    handleBlur,
    handleFocus,
    phoneNumberIsValid,
    checkRules,
    handleChangeRule,
  };
};

export default useEntry;
