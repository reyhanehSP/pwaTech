"use client";

import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";

import BottomNav from "@/components/common/BottomNavigation";
import BreadCrumbs from "@/components/common/BreadCrumb";
import style from "@/components/panel/profile/_styles/Profile.module.scss"
import TopNavigation from "@/components/common/TopNavigation";
import InputSearch from "@/components/common/InputSearch/InputSearch";

import { FilePond, registerPlugin } from "react-filepond";

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
 
    const {files , setFiles , handleSubmit} = useProfile()

  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs
          items={[
            { title: "داشبورد", url: "/main" },
            { title: "پروفایل", url: "/mian/profile" },
          ]}
        />

        <div className={style.mainLayout}>
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
            <TabPanel value={0}>
              <div className={style.tabContent}>
                <h1>درباره من</h1>
                <p>قصد ارائه چه خدماتی دارید؟</p>
                <p className={style.tabInfo}>
                  <span>تعداد تخصص های انتخاب شده</span>
                  <span className={style.badgeInfo}>2</span>
                </p>
                <InputSearch />
                <FormGroup className={style.CustomForm}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label=" تعمیر یخچال"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label=" تعمیر لباسشویی"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label=" تعمیر ماکروفر"
                  />
                </FormGroup>

                <div className={style.footer}>
                  <Button
                    variant="contained"
                    onClick={() => handleSubmit("register")}
                  >
                    تایید
                  </Button>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={1}>
              <div className={style.tabContent}>
                <h1>تصاویر نمونه کار</h1>
                <FilePond
                  files={files}
                  allowMultiple={true}
                  maxFiles={3}
                  server="/api"
                  name="files"
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
              </div>
            </TabPanel>
            <TabPanel value={2}>
              <div className={style.tabContent}>
                <h1>تصاویر نمونه کار</h1>
                <ul>
                  <li>
                    
                  </li>
                </ul>

              </div>
            </TabPanel>
            <TabPanel value={3}>محدوده های ارائه خدمات</TabPanel>
          </Tabs>
        </div>
      </Container>
      <BottomNav activeRoute={4} />
    </>
  );
};
export default Profile;
