"use client";

import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import style from "@/components/request/informationExpert/_styles/InformationExpert.module.scss";
import useInformation from "@/components/request/informationExpert/_hooks/useInformation";
import AppImage from "@/components/common/AppImage";
import { PropType } from "@/components/request/informationExpert/_type/type";

const InformationExpert: React.FC<PropType> = ({
  nextLevel,
  activeCurState,
}) => {
  const { handleChange } = useInformation();

  return (
    <Box className={style.content}>
      <Box className={style.paperTitle}>
        <Typography component="h1">اطلاعات کارشناس</Typography>
      </Box>

      <Box className={style.wrapper}>
        <FormControl>
          <FormLabel className={style.formLabel}>اطلاعات شخصی</FormLabel>
          <TextField
            className={style.inputText}
            name="firstName"
            onChange={handleChange}
            label="نام"
            id="outlined-size-small"
            size="small"
          />
          <TextField
            className={style.inputText}
            name="lastName"
            onChange={handleChange}
            label="نام خانوادگی"
            id="outlined-size-small"
            size="small"
          />
          <TextField
            type="number"
            name="nationalCode"
            className={style.inputText}
            onChange={handleChange}
            label="کدملی"
            id="outlined-size-small"
            size="small"
          />
        </FormControl>

        <FormControl>
          <FormLabel className={style.formLabel}>جنسیت</FormLabel>
          <RadioGroup
            name="gender"
            onChange={handleChange}
          >
            <FormControlLabel control={<Radio />} label="خانم" value={0} />
            <FormControlLabel control={<Radio />} label="آقا" value={1} />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel className={style.formLabel}>
            نوع فعالیت خود را انتخاب کنید
          </FormLabel>
          <Box className="flex">
            <RadioGroup
              name="jobType"
              onChange={handleChange}
            >
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="شخصی کار میکنم"
              />
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="واحد صنفی، مغازه و ... دارم"
              />
            </RadioGroup>
          </Box>
        </FormControl>

        <Box className={style.footer}>
          <button
            className={style.nextButton}
            type="submit"
            onClick={() =>
              nextLevel({
                type: "locationServices",
              })
            }
          >
            مرحله بعد
          </button>
          <button
            onClick={() => nextLevel({ type: "ChoosingSpecialty" })}
            className={
              activeCurState === 2 ? style.backButton : style.disabledBackButton
            }
          >
            <AppImage
              src={"/assets/icons/arrowLeft/icon.svg"}
              width={15}
              height={15}
            />
          </button>
        </Box>
      </Box>
    </Box>
  );
};
export default InformationExpert;
