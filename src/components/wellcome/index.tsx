"use client";
import { Button, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Wellcome = () => {
  const router = useRouter();
  const handleSubmit = () => {
       router.push("/main");
  };
  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <p>به الو بگو خوش آمدید</p>
        <p>منخصصین عزیز ثبت نام شما با موفقیت انجام شد</p>
        <p>برای انجام مراحل تاییدیه مدارک و مصاحبه به زودی با شما تماس گرفته خواهد شد</p>
        <Button variant="contained" onClick={handleSubmit}>
         شروع
        </Button>
       
      </div>
    </Container>
  );
};
export default Wellcome;
