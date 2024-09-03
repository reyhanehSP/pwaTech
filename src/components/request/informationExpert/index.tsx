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
  const { state, dispatch } = useInformation();

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
            value={state.firstName}
            onChange={(e) =>
              dispatch({
                type: "handleFirstNameChange",
                payload: e.target.value,
              })
            }
            label="نام"
            id="outlined-size-small"
            size="small"
          />
          <TextField
            className={style.inputText}
            value={state.lastName}
            onChange={(e) =>
              dispatch({
                type: "handleLastNameChange",
                payload: e.target.value,
              })
            }
            label="نام خانوادگی"
            id="outlined-size-small"
            size="small"
          />
          <TextField
            className={style.inputText}
            value={state.nationalCode}
            onChange={(e) =>
              dispatch({
                type: "handleNationalCodeChange",
                payload: e.target.value,
              })
            }
            label="کدملی"
            id="outlined-size-small"
            size="small"
          />
        </FormControl>

        <FormControl>
          <FormLabel className={style.formLabel}>جنسیت</FormLabel>
          <RadioGroup
            value={state.gender}
            onChange={(e) =>
              dispatch({
                type: "handleGenderChange",
                payload: e.target.value,
              })
            }
            
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
              value={state.activity}
              onChange={(e) =>
                dispatch({
                  type: "handleActivityChange",
                  payload: e.target.value,
                })
              }
            
            >
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="شخصی کار میکنم"
              />
              <FormControlLabel
                value={3}
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
                payload: state,
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
