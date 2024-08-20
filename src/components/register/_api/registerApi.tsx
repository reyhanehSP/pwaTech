import axios from "axios";
export const sendSMS = async (phoneNumber: string) => {
  const response = await axios.post(
    "http://185.88.177.194:8082/api/TechPwa/sendSmsVerification",
    {
      mobileNo: phoneNumber,
    },
    {
      headers: {
        "1669_Username": "uygdWf###$%gfg^548m",
        "1669_Password": "##djfMdf54-_##rrTTdj",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const verifySMS = async (phoneNumber: string, verifyCode: string) => {
  const response = await axios.post(
    "http://185.88.177.194:8082/api/TechPwa/CheckSmsVerificationForTechnecian",
    {
      MobileNo: phoneNumber,
      Message: verifyCode,
    },
    {
      headers: {
        "1669_Username": "uygdWf###$%gfg^548m",
        "1669_Password": "##djfMdf54-_##rrTTdj",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
