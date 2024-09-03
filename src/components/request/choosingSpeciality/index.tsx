"use client";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import React from "react";
import style from "@/components/request/choosingSpeciality/_styles/ChoosingSpeciality.module.scss";

import useChoosingSpeciality from "@/components/request/choosingSpeciality/_hooks/useChoosingSpeciality";
import { PropType } from "@/components/request/choosingSpeciality/_types/type";
import Loading from "@/components/common/Loading";
import InputSearch from "@/components/common/InputSearch/InputSearch";
import CheckBox from "@/components/common/CheckBox/index";
const ChoosingSpeciality: React.FC<PropType> = ({ nextLevel }) => {
  const {
    query,
    specialities,
    selectedSpecialities,
    isLoading,
    dispatch,
    valueHolder,
  } = useChoosingSpeciality();
  return (
    <Box className={style.content}>
      <Box className={style.paperTitle}>
        <Typography component="h1">انتخاب تخصص</Typography>
        <Typography component="h2">
          در چه زمینه ای ارائه خدمات می‌دهید؟
        </Typography>
      </Box>

      <InputSearch
        value={query}
        placeholder={valueHolder}
        onChange={(e: any) =>
          dispatch({ type: "changeQuery", payload: e.target.value })
        }
      />

      <Box dir="rtl">
        <Box className={style.list}>
          {isLoading === 1 ? <Loading /> : ""}
          {!isLoading &&
            specialities &&
            specialities.map((item: any) => (
              <CheckBox
              key ={item.ID}
                value={item.skillDesc}
                label={item.skillDesc}
                onChange={(e: any) =>
                  dispatch({
                    type: "updateSkill",
                    payload: [e.target.checked, item],
                  })
                }
              />
            ))}
        </Box>
      </Box>
      <Box className={style.footer}>
        <button
          className={style.nextButton}
          type="submit"
          onClick={() =>
            nextLevel({
              type: "InformationExpert",
              payload: selectedSpecialities,
            })
          }
        >
          مرحله بعد
        </button>
      </Box>
    </Box>
  );
};
export default ChoosingSpeciality;
