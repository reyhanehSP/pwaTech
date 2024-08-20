import {useState} from "react";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {sendSMS, verifySMS} from "@/components/login/_api/loginApi";

const useLogin = () => {
    const router = useRouter()
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState(false)
    const [verifyCode, setVerifyCode] = useState<string>('')


    const handleVerifyCode = () => {
        verifySMS(phoneNumber, verifyCode).then(res => {
            if (res.statusCode === 0) {
                router.push('/')
            } else {
                toast.error(res.message)
            }

        }).catch(error => {
            toast.error('لطفا اینترنت خود را چک کنید.')
        })
    }

    const handleSetPhoneNumber = (value: any) => {
        setPhoneNumber(value.replace(/[^0-9]/g, ""))
        if (value.length === 11) {
            setButtonDisabled(false)
        }
    }
    const handleSubmit = () => {
        sendSMS(phoneNumber)
            .then(res =>
                setEnteredPhoneNumber(true)
            )
            .catch(error => toast.error('لطفا اینترنت خود را چک کنید.'))
    }

    return {
        phoneNumber,
        setPhoneNumber,
        buttonDisabled,
        setButtonDisabled,
        handleSetPhoneNumber,
        handleSubmit,
        enteredPhoneNumber,
        verifyCode,
        setVerifyCode,
        handleVerifyCode
    }

}

export default useLogin
