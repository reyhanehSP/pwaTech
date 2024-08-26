"use client";

import {
  Button,
  Container,
  Divider,
  FormControl,
  FormGroup,
  IconButton,
  ImageList,
  ImageListItem,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import { useRouter } from "next/navigation";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
const Profile = () => {
  const router = useRouter();
  const handleSubmit = (value: string) => {
    router.push("/register");
  };
  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <span>پروفایل</span>
        <Tabs defaultValue={0}>
          <TabsList>
            <Tab value={0} className="mx-1">
              <Button variant="outlined">درباره من (تخصص ها)</Button>
            </Tab>
            <Tab value={1} className="mx-1">
              <Button variant="outlined"> تصاویر نمونه کار</Button>
            </Tab>
            <Tab value={2} className="mx-1">
              <Button variant="outlined"> اطلاعات تماس</Button>
            </Tab>
            <Tab value={3} className="mx-1">
              <Button variant="outlined">
                {" "}
                چه محدوده هایی خدمات ارائه میدهید
              </Button>
            </Tab>
          </TabsList>
          <TabPanel value={0}>
            <div>
              <span>درباره من</span>
              <p>قصد ارائه چه خدماتی دارید؟</p>
              <p>
                تعداد تخصص های انتخاب شده
                <span>2</span>
              </p>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="تعمیر"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              </Paper>
              <div className="border border-black border-1 my-2 w-3/5 p-2">
                تعمیر یخچال
              </div>
              <div className="border border-black border-1 my-2 w-3/5 p-2">
                تعمیر لباسشویی
              </div>
              <div className="border border-black border-1 my-2 w-3/5 p-2">
                تعمیر ماکروفر
              </div>
            </div>
            <Button
              variant="contained"
              onClick={() => handleSubmit("register")}
            >
              تایید
            </Button>
          </TabPanel>
          <TabPanel value={1}>
            تصاویر نمونه کار
            <p>عکس از قبل و بعد از انجام کار</p>
            <p>عکس از خودتون و تیمتون در حین انجام کار</p>
            <p>عکس از لوازم و تجهیزات</p>
           
          </TabPanel>
          <TabPanel value={2}>
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
            </FormGroup>
          </TabPanel>
          <TabPanel value={3}>محدوده های ارائه خدمات</TabPanel>
        </Tabs>
      </div>
    </Container>
  );
};
export default Profile;
