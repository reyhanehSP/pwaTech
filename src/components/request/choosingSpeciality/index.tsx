"use client";
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import style from "@/components/request/choosingSpeciality/_styles/ChoosingSpeciality.module.scss";

import useChoosingSpeciality from "@/components/request/choosingSpeciality/_hooks/useChoosingSpeciality";
import { PropType } from "@/components/request/choosingSpeciality/_types/type";
import Loading from "@/components/common/Loading";
import InputSearch from "@/components/common/InputSearch/InputSearch";

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
    <div className={style.content}>
      <div className={style.paperTitle}>
        <h1>انتخاب تخصص</h1>
        <h2>در چه زمینه ای ارائه خدمات می‌دهید؟</h2>
      </div>

      <InputSearch
        value={query}
        placeholder={valueHolder}
        onChange={(e : any) =>
          dispatch({ type: "changeQuery", payload: e.target.value })
        }
      />


      <div dir="rtl">
        <div className={style.list}>
          {isLoading === 1 ? <Loading /> : ""}
          {!isLoading &&
            specialities &&
            specialities.map((item: any) => (
              <FormControlLabel
                key={item.ID}
                control={
                  <Checkbox
                    value={item.skillDesc}
                    onChange={(e) =>
                      dispatch({
                        type: "updateSkill",
                        payload: [e.target.checked, item],
                      })
                    }
                  />
                }
                label={item.skillDesc}
              />
            ))}
        </div>
      </div>
      <div className={style.footer}>
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
      </div>
    </div>
  );
};
export default ChoosingSpeciality;
