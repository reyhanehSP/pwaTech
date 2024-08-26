"use client";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import style from "@/components/request/choosingSpeciality/_styles/styles.module.scss";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import useChoosingSpeciality from "@/components/request/choosingSpeciality/_hooks/useChoosingSpeciality";
import {PropType} from "@/components/request/choosingSpeciality/_types/type"

const ChoosingSpeciality: React.FC<PropType> = ({nextLevel, activeCurState}) => {

  const { query, specialities, selectedSpecialities, dispatch } =
    useChoosingSpeciality();
  return (
    <div className={style.content}>
      <div className="paper">
        <div className="paper-title">
          <p className="title">انتخاب تخصص</p>
          <p className="sub-title">در چه زمینه ای ارائه خدمات می‌دهید؟</p>
        </div>

        <TextField
          label="Size"
          id="outlined-size-small"
          size="small"
          value={query}
          onChange={(e) =>
            dispatch({ type: "changeQuery", payload: e.target.value })
          }
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <div dir="rtl">
          <div>مرتبط ترین تخصص شما</div>

          {specialities &&
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
    </div>
  );
};
export default ChoosingSpeciality;
