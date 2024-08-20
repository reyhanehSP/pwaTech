"use client";

import { Container } from "@mui/material";
import Link from "next/link";

const Dashboard = () => {
  return (
    <Container maxWidth="lg" className="h-full">
                <div className="main-layout">
      <div className="flex flex-col">
        <Link href="/main/order">سفارش‌ها</Link>
        <Link href="/main/cost">هزینه ها</Link>
        <Link href="/main/support">پشتیبانی</Link>
        <Link href="/main/profile">پروفایل</Link>
      </div>
      </div>
    </Container>
  );
};
export default Dashboard;
