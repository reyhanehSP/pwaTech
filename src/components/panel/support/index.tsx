"use client";

import BottomNav from "@/components/common/BottomNavigation";
import TopNavigation from "@/components/common/TopNavigation";
import { Container } from "@mui/material";
import style from "@/components/panel/support/_styles/Support.module.scss"
import BreadCrumbs from "@/components/common/BreadCrumb";
import Link from "next/link";


const Support = () => {
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs
          items={[
            { title: "داشبورد", url: "/main" },
            { title: "پشتیبانی", url: "/mian/support" },
          ]}
        />
        <div className={style.linkList}>
          <Link href="/">پیامک های الو بگو</Link>
          <Link href="tel:02122228300"> تماس با پشتیبانی</Link>
          <Link href="/"> چت با مشتری</Link>
        </div>
      </Container>
      <BottomNav activeRoute={4} />
    </>
  );
};
export default Support;
