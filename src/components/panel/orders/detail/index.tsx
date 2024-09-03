"use client";
import BottomNav from "@/components/common/BottomNavigation";
import BreadCrumbs from "@/components/common/BreadCrumb";
import { Box, Container, FormGroup, TextField, Typography } from "@mui/material";
import TopNavigation from "@/components/common/TopNavigation";
import Map from "@/components/common/Map/index";
import style from "@/components/panel/orders/detail/_styles/OrderDetails.module.scss"
const OrderDetail = () => {
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs
          items={[
            { title: "صفحه اصلی", url: "/main" },
            { title: "سفارش‌ها", url: "/main/oreder/detail" },
            { title: "جزئیات سفارش", url: "/main/oreder/detail" },
          ]}
        />
        <Box className={style.mainLayout}>
          <Box className={style.customCard}>
            <Typography component="h2">آقای کمالی</Typography>
            <Typography component="p">
              کرج حصار- تعمیر ماشین لباسشویی
            </Typography>
          </Box>
          <FormGroup className={style.customFormGroup}>
            <Typography component="label" htmlFor="mobile">
              قطعه در حال پیگیری
            </Typography>
            <TextField id="mobile" value="برد" />
            <Typography component="label" htmlFor="phone">
              وضعیت
            </Typography>
            <TextField
              id="phone"
              value="در حال تعمیر- درحال انتقال به کارگاه-درحال تهیه قطعه"
            />
          </FormGroup>
          <Box className={style.mapContainer}>
            <Map position={[35.811249, 51.012633]} />
          </Box>
        </Box>
      </Container>

      <BottomNav activeRoute={2} />
    </>
  );
};
export default OrderDetail;
