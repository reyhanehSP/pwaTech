"use client";
import BottomNav from "@/components/common/BottomNavigation";
import BreadCrumbs from "@/components/common/BreadCrumb";
import TopNavigation from "@/components/common/TopNavigation";
import { Container } from "@mui/material";
import style from "@/components/panel/orders/cancel/_styles/CancelOrder.module.scss";
const CancelOrder = () => {
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs
          items={[
            { title: "صفحه اصلی", url: "/main" },
            { title: "سفارش‌ها", url: "/main/orders" },
            { title: "لغو سفارش", url: "/main/orders/cancel" },
          ]}
        />
      </Container>
      <BottomNav activeRoute={2} />
    </>
  );
};
export default CancelOrder;
