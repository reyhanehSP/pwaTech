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
import useLocation from "@/components/request/locationServices/_hooks/useLocation";

const LocationServices = () => {
  const {
    handleSubmit,
    province,
    handleChangeProvince,
    city,
    setCity,
    selectedID,
    dispatch
  } = useLocation();
  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <span>محل ارائه خدمات</span>
        <FormGroup>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">استان</InputLabel>
            <Select
              onChange={(e) => handleChangeProvince(Number(e.target.value))}
              value={selectedID}
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Age"
            >
              {province.map((item) => (
                <MenuItem key={item.ID} value={item.ID}>
                  {item.ProvinceDesc}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">شهر</InputLabel>
            <Select
              onChange={(e) => setCity(e.target.value)}
              value={city}
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Age"
            >
              <MenuItem value={2}>طالقان</MenuItem>
              <MenuItem value={3}>اشتهارد</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" onClick={ () => dispatch ({type : "finnalLevel"})}>
            مرحله بعد
          </Button>
        </FormGroup>
      </div>
    </Container>
  );
};
export default LocationServices;
