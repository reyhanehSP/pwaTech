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

const ChoosingSpeciality = () => {
  const {
    handleSubmit,
    query,
    setQuery,
    specialities,
    selectedSpeciality,
    handleAddSpeciality,
  } = useChoosingSpeciality();

  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <p>انتخاب تخصص</p>
        <p>در چه زمینه ای ارائه خدمات می‌دهید؟</p>

        <Paper onSubmit={handleSubmit} component="form">
          <TextField
            label="Size"
            id="outlined-size-small"
            size="small"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <div dir="rtl">
            <div>مرتبط ترین تخصص شما</div>
            
            {specialities && specialities.map((item : any) => (
              <FormControlLabel
                key={item.ID}
                control={
                  <Checkbox
                    value={selectedSpeciality}
                    onChange={(e) =>
                      handleAddSpeciality(e.target.checked, item)
                    }
                  />
                }
                label={item.skillDesc}
              />
            ))}
          </div>
          <Button type="submit" variant="contained">
            مرحله بعد
          </Button>
        </Paper>
      </div>
    </Container>
  );
};
export default ChoosingSpeciality;
