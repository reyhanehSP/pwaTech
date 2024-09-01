"use client";
import useDashboard from "@/components/panel/_hooks/useDashboard";
import BottomNav from "@/components/common/BottomNavigation";
import style from "@/components/panel/_styles/dashboard.module.scss";
import BreadCrumbs from "@/components/common/BreadCrumb";
import { Container } from "@mui/material";
import TopNavigation from "../common/TopNavigation";

const Dashboard = () => {
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs items={[{ title: "صفحه اصلی", url: "/main" }]} />
      </Container>

      <BottomNav activeRoute={1} />
    </>
  );
};
export default Dashboard;
