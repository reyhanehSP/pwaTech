"use client";
import BottomNav from "@/components/common/BottomNavigation";
import BreadCrumbs from "@/components/common/BreadCrumb";
import { Box, Container } from "@mui/material";
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
        <Box className={style.mapContainer}>
        
        </Box>
      </Container>

      <BottomNav activeRoute={1} />
    </>
  );
};
export default OrderDetail;
