"use client";

import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import style from '@/components/request/informationExpert/_styles/styles.module.scss'
import useInformation from "@/components/request/informationExpert/_hooks/useInformation";
import AppImage from "@/components/common/AppImage";
import {PropType} from "@/components/request/informationExpert/_type/type"

const InformationExpert: React.FC<PropType>  = ({nextLevel, activeCurState}) => {
  const { information, dispatch } = useInformation();

  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <span>اطلاعات کارشناس</span>

        <div className="flex flex-col gap-5">
          <TextField
            value={information.firstName}
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
            value={information.lastName}
            onChange={(e) =>
              dispatch({
                type: "handleLastNameChange",
                payload: e.target.value,
              })
            }
            label="نام خانوادگی"
            id="outlined-size-small"
            defaultValue="نام خانوادگی"
            size="small"
          />
          <TextField
            value={information.nationalCode}
            onChange={(e) =>
              dispatch({
                type: "handleNationalCodeChange",
                payload: e.target.value,
              })
            }
            label="کدملی"
            id="outlined-size-small"
            defaultValue="کدملی"
            size="small"
          />
        </div>
        <div className="my-2">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">جنسیت</FormLabel>
            <RadioGroup
              value={information.gender}
              onChange={(e) =>
                dispatch({
                  type: "handleGenderChange",
                  payload: e.target.value,
                })
              }
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel control={<Radio />} label="خانم" value={0} />
              <FormControlLabel control={<Radio />} label="آقا" value={1} />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <p>نوع فعالیتتون را انتخاب کنید</p>
          <div className="flex">
            <RadioGroup
              value={information.gender}
              onChange={(e) =>
                dispatch({
                  type: "handleGenderChange",
                  payload: e.target.value,
                })
              }
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="شخصی کار میکنم"
              />
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="واحد صنفی، مغازه و ... دارم"
              />
            </RadioGroup>
          </div>
        </div>
        <div className={style.footer}>
          <button
            className={style.nextButton}
            type="submit"
            onClick={() =>
              nextLevel({
                type: "locationServices",
                payload: 0,
              })
            }
          >
            مرحله بعد
          </button>
          <button
            onClick={() => nextLevel({ type: "ChoosingSpecialty" })}
            className={
              activeCurState === 2 ? style.disabledBackButton : style.backButton
            }
          >
            <AppImage
              src={"/assets/icons/arrowLeft/icon.svg"}
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default InformationExpert;
