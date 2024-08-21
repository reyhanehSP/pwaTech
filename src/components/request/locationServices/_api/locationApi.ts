import axios from "axios";
export const GetProvince = async () => {
  const response = await axios.post(
    "http://185.88.177.194:8082/api/TechPwa/GetProvince", {},
    
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

export const GetCity = async (ID: number) => {
  const response = await axios.get(
    "http://185.88.177.194:8082/api/TechPwa/GetCity",
    {
      params: {
        "ID": ID,
      },
      headers: {
        "1669_Username": "uygdWf###$%gfg^548m",
        "1669_Password": "##djfMdf54-_##rrTTdj",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
