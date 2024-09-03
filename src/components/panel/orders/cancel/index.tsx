"use client";
import BottomNav from "@/components/common/BottomNavigation";
import BreadCrumbs from "@/components/common/BreadCrumb";
import TopNavigation from "@/components/common/TopNavigation";
import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography }
 from "@mui/material";
 import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import style from "@/components/panel/orders/cancel/_styles/CancelOrder.module.scss";
const CancelOrder = () => (
  <>
    <TopNavigation />
    <Container maxWidth="lg" className={style.wrapper}>
      <BreadCrumbs
        items={[
          { title: "سفارش‌ها", url: "/main/orders" },
          { title: "لغو سفارش", url: "/main/orders/cancel" },
        ]}
      />
      <Box sx={{ margin: "10px", display: "flex", flexDirection: "column" }}>
        <Typography component="h2">
          علت لغو سفارش را برای ما مشخص کنید
        </Typography>

        <FormControlLabel
          control={<Checkbox checked />}
          label="عدم پاسخگویی به مشتری"
        />
        <FormControlLabel
          control={<Checkbox checked />}
          label="خارج از محدوده خدمات"
        />
        <FormControlLabel control={<Checkbox />} label="مشتری کنسل کرد" />
        <FormControlLabel
          control={<Checkbox />}
          label="دستگاه توسط تعمیرکار باز شده بود"
        />
        <FormControlLabel control={<Checkbox checked />} label="سایر" />

        <TextareaAutosize placeholder="توضیحات" minRows="5" />
      </Box>
      <Box className={style.footer}>
        <Button className={style.customButton}  variant="contained">
          تایید
        </Button>
      </Box>
    </Container>

    <BottomNav activeRoute={2} />
  </>
);
export default CancelOrder;
