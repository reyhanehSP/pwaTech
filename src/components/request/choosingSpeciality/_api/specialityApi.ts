import axios from "axios";
export const getSkills = async (desc: string) => {
 
    const response = await axios.post(
      "http://185.88.177.194:8082/api/TechPwa/getskill",
      {
        desc: desc,
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
