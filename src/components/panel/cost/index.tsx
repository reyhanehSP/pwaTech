"use client";

import {

  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
const Cost = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/register/verification");
  };
  return (
    <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <span>هزینه ها </span>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="سفارش های من"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
        <p>سفارش مورد نظر را برای وارد کردن هزینه انتخاب کنید</p>
       
          <Link href="/main/cost/detail">
           <div className="border border-1">
              کد سفارش : 123
              <br />
              تاریخ
              <br />
              کرج حصار
            </div>
          </Link>
          <Link href="/main/cost/detail">
             <div className="border border-1">
              کد سفارش : 123
              <br />
              تاریخ
              <br />
              کرج حصار
            </div>
          </Link>
      
      </div>
    </Container>
  );
};
export default Cost;
