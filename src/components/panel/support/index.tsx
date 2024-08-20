"use client";

import { Container } from "@mui/material";

const Support = () => {
  return (
    <Container maxWidth="lg" className="h-full">
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
  );
};
export default Support;
