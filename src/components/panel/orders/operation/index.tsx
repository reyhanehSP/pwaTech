"use client";
import BottomNav from "@/components/common/BottomNavigation";
import BreadCrumbs from "@/components/common/BreadCrumb";
import { Box, Button, Container, FormGroup, TextField, Typography } from "@mui/material";
import TopNavigation from "@/components/common/TopNavigation";
import style from "@/components/panel/orders/operation/_styles/Operation.module.scss";

const OperationOrder = () => {
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs
          items={[
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
          <Typography component="p">
            این قسمت توسط شما تکمیل میشود و برای مشتری قابل مشاهده خواهد بود.
          </Typography>
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
            <Typography component="label" htmlFor="address">
              زمان تقریبی پایان کار
            </Typography>
            <TextField id="address" value="5 روز " />
          </FormGroup>
          <Box className={style.footer}>
            <Button
              className={style.customButton}
              variant="contained"
            >
              تایید
            </Button>
          </Box>
        </Box>
      </Container>
      <BottomNav activeRoute={1} />
    </>
  );
};
export default OperationOrder;
