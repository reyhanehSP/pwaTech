"use client";
import { useState } from "react";
import {
  Box,
  Button,
  CardContent,
  Container,
  Tab,
  Typography,
  Tabs,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import Link from "next/link";
import Card from "@mui/material/Card";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/common/BottomNavigation";
import TopNavigation from "@/components/common/TopNavigation";
import style from '@/components/panel/orders/_styles/Orders.module.scss'
import BreadCrumbs from "@/components/common/BreadCrumb";
// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }
// function CustomTabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   // return (
//   //   // <div
//   //   //   role="tabpanel"
//   //   //   hidden={value !== index}
//   //   //   id={`simple-tabpanel-${index}`}
//   //   //   aria-labelledby={`simple-tab-${index}`}
//   //   //   {...other}
//   //   // >
//   //   //   {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//   //   // </div>
//   // );
// }
const Main = () => {
  // const [value, setValue] = useState(0);
  // const router = useRouter()
  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };
  //  const handleSubmit = () => {

  //   //  router.push("/register/services");
  //  };
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs
          items={[
            { title: "داشبورد", url: "/main" },
            { title: "سفارشات", url: "/mian/orders" },
          ]}
        />
        {/* <div className="main-layout">
        <div className="flex gap-3">
          <Link href="/main/order">سفارش‌ها</Link>
          <Link href="#">کارهای انجام شده</Link>
          <Link href="#">کنسل شده</Link>
        </div>

        <div className="">
          <Card className="w-50">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                تعمیر ماشین لباسشویی
              </Typography>
              <div className="flex">
                <ul className="w-3/5">
                  <li className="flex justify-between my-1">
                    <span>ساعت مراجعه</span>
                  </li>
                  <li className="flex justify-between my-1">
                    <span>کرج حصار</span>
                  </li>
                  <li className="flex justify-between my-1">
                    <span>
                      مشخصات دستگاه، برند، مشکل دستگاه، اسم مشخصات مشتری
                    </span>
                  </li>
                </ul>
                <div className="w-2/5">
                  <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="عملیات" {...a11yProps(0)} />

                    <Tab label="جزئیات" {...a11yProps(1)} />

                    <Tab label="لغو سفارش" {...a11yProps(2)} />
                  </Tabs>
                </div>
              </div>
              <div></div>
            </CardContent>
          </Card>
          <CustomTabPanel value={value} index={0}>
            <Card className="w-full p-2">
              <div className="p-2">
                <span>عملیات</span>
                <h2>آقای کمالی</h2>
              </div>
              <p>
                این قسمت توسط شما تکمیل می شود و برای مشتری قابل مشاهده خواهد
                بود
              </p>
              <div className="flex gap-y-3">
                <ul>
                  <li>
                    <b>قطعه در حال پیگیری :</b>
                    برد
                  </li>
                  <li>
                    <b>وضعیت:</b>
                    درحال تعمیر، در حال انتقال به کارگاه- در حال تهیه قطعه
                  </li>
                  <li>
                    <b>زمان تقریبی پایان کار:</b>5 روز
                  </li>
                </ul>
              </div>
              <div className="p-5 border border-1 m-2">لوکیشن</div>
            </Card>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Card className="w-full p-2">
              <div className="p-2">
                <span>جزئیات</span>
                <h2>آقای کمالی</h2>
              </div>
              <div className="flex gap-y-3">
                <ul>
                  <li>تعمیر ماشین لباسشویی - کرج حصار</li>
                  <li>محدوده : کرج، حصار</li>
                  <li>زمان انجام کار</li>
                </ul>
              </div>
              <div className="p-5 border border-1 m-2">لوکیشن</div>
            </Card>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Card className="w-full p-2">
              <div className="p-2">
                <span>لغو سفارش</span>
                <p>علت لغو سفارش را برای ما مشخص کنید</p>
              </div>
              <div className="flex gap-y-3">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="عدم پاسخگویی مشتری"
                    control={<Radio />}
                    label="عدم پاسخگویی مشتری"
                  />
                  <FormControlLabel
                    value="خارج از محمدوده خدمات"
                    control={<Radio />}
                    label="خارج از محمدوده خدمات"
                  />
                  <FormControlLabel
                    value="مشتری کنسل کرد"
                    control={<Radio />}
                    label="مشتری کنسل کرد"
                  />
                  <FormControlLabel
                    value="دستگاه توسط تعمیرکار باز شده بود"
                    control={<Radio />}
                    label="دستگاه توسط تعمیرکار باز شده بود"
                  />
                  <FormControlLabel
                    value="سایر"
                    control={<Radio />}
                    label="سایر"
                  />
                </RadioGroup>
              </div>
              <div className="p-5 border border-1 m-2">توضیحات</div>
              <Button variant="contained" onClick={handleSubmit}>
                تایید
              </Button>
            </Card>
          </CustomTabPanel>
        </div>
      </div> */}
      </Container>
      <BottomNav activeRoute={2} />
    </>
  );
};
export default Main;
