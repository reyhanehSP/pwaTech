"use client";

import {
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
 
} from "@mui/material";
import useLocation from "@/components/request/locationServices/_hooks/useLocation";
import style from "@/components/request/locationServices/_styles/LocationServices.module.scss";
import AppImage from "@/components/common/AppImage";
import { PropType } from "@/components/request/locationServices/_types/type";
const LocationServices: React.FC<PropType> = ({
  nextLevel,
  activeCurState
}) => {
  const {
    province,
    handleSubmit,
    handleChangeProvince,
    city,
    setCity,
    selectedID,
  } = useLocation();
  return (
    <div className={style.content}>
      <div className={style.paperTitle}>
        <h1>محل ارائه خدمات</h1>
      </div>
      <FormGroup>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
          <InputLabel id="demo-select-small-label">استان</InputLabel>
          <Select
            onChange={(e) => handleChangeProvince(Number(e.target.value))}
            value={selectedID}
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Age"
          >
            {province.map((item: any) => (
              <MenuItem key={item.ID} value={item.ID}>
                {item.ProvinceDesc}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
          <InputLabel id="demo-select-small-label">شهر</InputLabel>
          <Select
           
            value={selectedID}
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Age"
          >
            {city.map((item: any) => (
              <MenuItem key={item.ID} value={item.ID}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className={style.footer}>
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
              activeCurState === 3 ? style.disabledBackButton : style.backButton
            }
          >
            <AppImage
              src={"/assets/icons/arrowLeft/icon.svg"}
              width={15}
              height={15}
            />
          </button>
        </div>
      </FormGroup>
    </div>
  );
};
export default LocationServices;
