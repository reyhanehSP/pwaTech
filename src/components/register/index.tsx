"use client";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Paper,
  TextField,
} from "@mui/material";
import useRegister from "@/components/register/_hooks/useRegister";

const Register = () => {
  const {
    phoneNumber,
    setPhoneNumber,
    buttonDisabled,
    setButtonDisabled,
    handleSetPhoneNumber,
    handleSubmit,
    enteredPhoneNumber,
    verifyCode,
    setVerifyCode,
    handleVerifyCode,
  } = useRegister();
  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <span>اطلاعات تماس</span>
        <div>
         
          {enteredPhoneNumber ? (
            <div >
              <p >{phoneNumber} 98+</p>
              <p>ما پیامکی حاوی کد فعالسازی به شماره تلفن ارسال کرده ایم.</p>
              <TextField
                sx={{
                  width: "100%",
                  " .MuiInputBase-root": {
                    borderRadius: "1rem",
                  },
                }}
                value={verifyCode}
                onChange={(e) =>
                  e.target.value.length < 7 && setVerifyCode(e.target.value)
                }
                label="کد را وارد کنید"
                multiline
                maxRows={4}
              />
              +
              <Button
                sx={{ width: "100%", borderRadius: "1rem", height: "40px" }}
                variant="contained"
                onClick={handleVerifyCode}
                disabled={buttonDisabled}
              >
                ورود
              </Button>
            </div>
          ) : (
            <div >
              <p > ورود به الو بگو</p>
              <TextField
                sx={{
                  width: "100%",
                  " .MuiInputBase-root": {
                    borderRadius: "1rem",
                  },
                }}
                value={phoneNumber}
                onChange={(e) => handleSetPhoneNumber(e.target.value)}
                label="شماره موبایل"
                multiline
                maxRows={4}
              />
              <Button
                sx={{ width: "100%", borderRadius: "1rem", height: "40px" }}
                variant="contained"
                onClick={handleSubmit}
                disabled={buttonDisabled}
              >
                بعدی
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
export default Register;
