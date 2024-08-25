"use client";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import useChoosingSpeciality from "@/components/request/choosingSpeciality/_hooks/useChoosingSpeciality";

const ChoosingSpeciality = ({nextLevel} : {nextLevel : any}) => {
  const {
    query,
    specialities,
    selectedSpecialities,
   dispatch
  } = useChoosingSpeciality();
  console.log(selectedSpecialities);
  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <p>انتخاب تخصص</p>
        <p>در چه زمینه ای ارائه خدمات می‌دهید؟</p>

        <Paper component="form">
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
          <Button
            type="submit"
            variant="contained"
            onClick={() => nextLevel({ type: "InformationExpert" , payload : selectedSpecialities })}
          >
            مرحله بعد
          </Button>
        </Paper>
      </div>
    </Container>
  );
};
export default ChoosingSpeciality;
