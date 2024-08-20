"use client";

import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";

const InformationExpert = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/services");
  };
  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <span>اطلاعات کارشناس</span>
        <FormGroup>
          <div className="flex flex-col gap-5">
            <TextField
              label="نام"
              id="outlined-size-small"
              defaultValue="نام"
              size="small"
            />
            <TextField
              label="نام خانوادگی"
              id="outlined-size-small"
              defaultValue="نام خانوادگی"
              size="small"
            />
            <TextField
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
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="خانم"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="آقا"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <p>نوع فعالیتتون را انتخاب کنید</p>
            <div className="flex">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="شخصی کار میکنم"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="واحد صنفی، مغازه و ... دارم"
                />
              </RadioGroup>
            </div>
          </div>
          <Button variant="contained" onClick={handleSubmit}>
            مرحله بعد
          </Button>
        </FormGroup>
      </div>
    </Container>
  );
};
export default InformationExpert;
