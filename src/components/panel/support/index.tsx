"use client";

import BottomNav from "@/components/common/BottomNavigation";
import TopNavigation from "@/components/common/TopNavigation";
import { Container } from "@mui/material";
import style from "@/components/panel/support/_styles/Support.module.scss"
import BreadCrumbs from "@/components/common/BreadCrumb";
const Support = () => {
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs items={[{ title: "داشبورد", url: "/main" } , {title : "پشتیبانی" , url : '/mian/support'}]} />
        <div className="main-layout">
          <span>پشتیبانی</span>

          <div className="border border-black border-1 my-2 w-3/5 p-2">
            پیامک های الو بگو
          </div>
          <div className="border border-black border-1 my-2 w-3/5 p-2">
            تماس با پشتیبانی
          </div>
          <div className="border border-black border-1 my-2 w-3/5 p-2">
            چت با مشتری
          </div>
        </div>
      </Container>
      <BottomNav activeRoute={4} />
    </>
  );
};
export default Support;
