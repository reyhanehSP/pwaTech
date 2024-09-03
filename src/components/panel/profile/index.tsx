"use client";

import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import BottomNav from "@/components/common/BottomNavigation";
import BreadCrumbs from "@/components/common/BreadCrumb";
import style from "@/components/panel/profile/_styles/Profile.module.scss";
import TopNavigation from "@/components/common/TopNavigation";
import InputSearch from "@/components/common/InputSearch/InputSearch";
import ColorButton from "@/components/common/AppButton/index";
import { FilePond, registerPlugin } from "react-filepond";
import CheckBox from "@/components/common/CheckBox"
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import useProfile from "@/components/panel/profile/_hooks/useProfile";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
const Profile = () => {
  const { files, setFiles, handleSubmit } = useProfile();

  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs items={[{ title: "پروفایل", url: "/mian/profile" }]} />
        <Box className={style.mainLayout}>
          <Tabs defaultValue={0}>
            <TabsList className={style.customTab}>
              <Tab value={0} className="mx-1">
                درباره من
              </Tab>
              <Tab value={1} className="mx-1">
                نمونه کار
              </Tab>
              <Tab value={2} className="mx-1">
                اطلاعات تماس
              </Tab>
              <Tab value={3} className="mx-1">
                محدوده خدمات
              </Tab>
            </TabsList>
            <TabPanel value={0} className={style.tabContent}>
              <Typography variant="h6" component="h1">
                درباره من
              </Typography>

              <Typography component="p" className={style.tabInfo}>
                <Typography component="span">
                  تعداد تخصص های انتخاب شده
                </Typography>
                <Typography component="span" className={style.badgeInfo}>
                  2
                </Typography>
              </Typography>
              <Typography component="p">قصد ارائه چه خدماتی دارید؟</Typography>

              <InputSearch />
              <FormGroup className={style.CustomForm}>
                <CheckBox label=" تعمیر یخچال" value={0} />
                <CheckBox label="تعمیر لباسشویی" value={0} />
                <CheckBox label="تعمیر ماکروفر" value={0} />
              </FormGroup>
              <Box className={style.footer}>
                <Button
                  className={style.customButton}
                  variant="contained"
                  onClick={() => handleSubmit("register")}
                >
                  تایید
                </Button>
              </Box>
            </TabPanel>
            <TabPanel className={style.tabContent} value={1}>
              <Typography variant="h6" component="h1">
                تصاویر نمونه کار
              </Typography>
              <FilePond
                files={files}
                server={{
                  process: (file) =>
                    new Promise((resolve, reject) => {
                      // Process and return a promise that resolves with the server response
                      // Here you can insert your API call or any logic needed to handle the file
                      console.log("Processing file", file);

                      resolve("server-file-id"); // Change this to your response ID
                    }),
                  revert: (uniqueFileId) =>
                    new Promise((resolve, reject) => {
                      // Handle file revert logic if needed
                      console.log("Reverting file", uniqueFileId);
                      resolve("");
                    }),
                  // Additional options can be added as needed
                }}
                allowMultiple={true}
                onupdatefiles={setFiles}
                acceptedFileTypes={["image/png", "image/jpeg"]}
                maxFiles={1}
                name="files"
                labelIdle='<span class="filepond--label-action">لطفا تصویر خود را از این قسمت بارگذاری کنید </span>'
              />
              <Box className={style.footer}>
                <Button
                  className={style.customButton}
                  variant="contained"
                  onClick={() => handleSubmit("register")}
                >
                  تایید
                </Button>
              </Box>
            </TabPanel>
            <TabPanel className={style.tabContent} value={2}>
              <Typography variant="h6" component="h1">
                اطلاعات تماس
              </Typography>
              <FormGroup className={style.customFormGroup}>
                <Typography component="label" htmlFor="mobile">
                  شماره‌های فعال
                </Typography>
                <TextField id="mobile" />
                <Typography component="label" htmlFor="phone">
                  تلفن ثابت
                </Typography>
                <TextField id="phone" />
                <Typography component="label" htmlFor="address">
                  آدرس
                </Typography>
                <TextField id="address" />
                <Box className={style.footer}>
                  <Button
                    className={style.customButton}
                    variant="contained"
                    onClick={() => handleSubmit("register")}
                  >
                    تایید
                  </Button>
                </Box>
              </FormGroup>
            </TabPanel>
            <TabPanel className={style.tabContent} value={3}>
              <FormGroup className={style.customFormGroup}>
                <Typography variant="h6" component="h1">
                  محدوده های ارائه خدمات
                </Typography>
                <Typography component="label" htmlFor="provine">
                  استان
                </Typography>
                <TextField id="provine" value="استان" />
                <Typography component="label" htmlFor="city">
                  شهر
                </Typography>
                <TextField id="city" value="کرج" />
              </FormGroup>
              <Box
                sx={{
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CheckBox value={1} label="کرج" />
                <CheckBox value={2} label="اشتهارد" />
               
              </Box>
              <Box className={style.footer}>
                <Button
                  className={style.customButton}
                  variant="contained"
                >
                  تایید
                </Button>
              </Box>
            </TabPanel>
          </Tabs>
        </Box>
      </Container>
      <BottomNav activeRoute={1} />
    </>
  );
};
export default Profile;
