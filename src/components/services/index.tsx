"use client";

import {
  Button,
  Container,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import useServices from "@/components/services/_hooks/useServices"

const Services = () => {
  const {handleSubmit} = useServices();
  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <span>محل ارائه خدمات</span>
        <FormGroup>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">استان</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Age"
            >
              <MenuItem value={10}>آذربایجان غربی</MenuItem>
              <MenuItem value={20}>البرز</MenuItem>
              <MenuItem value={30}>تهران</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">شهر</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Age"
            >
              <MenuItem value={10}>کرج</MenuItem>
              <MenuItem value={20}>طالقان</MenuItem>
              <MenuItem value={30}>اشتهارد</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={handleSubmit}>
            مرحله بعد
          </Button>
        </FormGroup>
      </div>
    </Container>
  );
};
export default Services;
