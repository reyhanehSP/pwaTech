"use client";

import {
  Box,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Typography,
 
} from "@mui/material";
import useLocation from "@/components/request/locationServices/_hooks/useLocation";
import style from "@/components/request/locationServices/_styles/LocationServices.module.scss";
import AppImage from "@/components/common/AppImage";
import { PropType } from "@/components/request/locationServices/_types/type";
const LocationServices: React.FC<PropType> = ({
  nextLevel,
  activeCurState
}) => {
  const { province, handleChangeProvince, handleSubmit, selectedID } =
    useLocation();


  return (
    <Box className={style.content}>
      <Box className={style.paperTitle}>
        <Typography component="h1">محل ارائه خدمات</Typography>
      </Box>
      <FormGroup>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">استان</InputLabel>
          <Select
            onChange={(e) => handleChangeProvince(e.target.value)}
            value={selectedID}
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Age"
          >
            {province.map((item: any) => (
              <MenuItem key={item.ID} value={item} >
                {item.ProvinceDesc}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">شهر</InputLabel>
          <Select
            multiple
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Age"
          >
            {/* {city.map((item: any) => (
              <MenuItem key={item.ID} value={item.ID}>
                {item}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
        <Box className={style.footer}>
          <button
            className={style.nextButton}
            type="submit"
            onClick={handleSubmit}
          >
            مرحله بعد
          </button>

          <button
            onClick={() => nextLevel({ type: "InformationExpert" })}
            className={
              activeCurState === 3 ? style.backButton : style.disabledBackButton
            }
          >
            <AppImage
              src={"/assets/icons/arrowLeft/icon.svg"}
              width={15}
              height={15}
            />
          </button>
        </Box>
      </FormGroup>
    </Box>
  );
};
export default LocationServices;
