"use client";

import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import useInformation from "@/components/request/informationExpert/_hooks/useInformation";


const InformationExpert = () => {
  const {
    information,
    handleFirstNameChange,
    handleLastNameChange,
    handleNationalCodeChange,
    handleGenderChange,
    handleJobTypeChange,
    handleSubmit,
  } = useInformation();
  
  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <span>اطلاعات کارشناس</span>
        <Paper onSubmit={handleSubmit} component="form">
          <div className="flex flex-col gap-5">
            <TextField
              value={information.firstName}
              onChange={(e) => handleFirstNameChange(e.target.value)}
              label="نام"
              id="outlined-size-small"
              size="small"
            />
            <TextField
              value={information.lastName}
              onChange={(e) => handleLastNameChange(e.target.value)}
              label="نام خانوادگی"
              id="outlined-size-small"
              defaultValue="نام خانوادگی"
              size="small"
            />
            <TextField
              value={information.nationalCode}
              onChange={(e) => handleNationalCodeChange(e.target.value)}
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
                onChange={(e) => handleGenderChange(Number(e.target.value))}
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
                onChange={(e) => handleJobTypeChange(Number(e.target.value))}
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
          <Button variant="contained" onClick={handleSubmit}>
            مرحله بعد
          </Button>
        </Paper>
      </div>
    </Container>
  );
};
export default InformationExpert;
