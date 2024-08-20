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
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import useChoosingSpeciality from "@/components/choosingSpeciality/_hooks/useChoosingSpeciality";

const ChoosingSpeciality = () => {
  const { handleSubmit, query, setQuery } = useChoosingSpeciality();

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
            {query}
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="تعمیر یخچال"
            />
            <FormControlLabel control={<Checkbox />} label="نصب یخچال" />
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
