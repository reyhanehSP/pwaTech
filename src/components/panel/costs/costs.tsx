"use client";
import {
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import { useRouter } from "next/navigation";
import style from "@/components/panel/costs/_styles/Cost.module.scss";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import BottomNav from "@/components/common/BottomNavigation";
import TopNavigation from "@/components/common/TopNavigation";
import BreadCrumbs from "@/components/common/BreadCrumb";
const Costs = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/register/verification");
  };
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs
          items={[
            { title: "داشبورد", url: "/main" },
            { title: "هزینه ها", url: "/mian/costs" },
          ]}
        />

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

          <Link href="/main/costs/detail">
            <div className="border border-1">
              کد سفارش : 123
              <br />
              تاریخ
              <br />
              کرج حصار
            </div>
          </Link>
          <Link href="/main/costs/detail">
            <div className="border border-1">
              کد سفارش : 123
              <br />
              تاریخ
              <br />
              کرج حصار
            </div>
          </Link>
        </div>
        <BottomNav activeRoute={3} />
      </Container>
      <BottomNav activeRoute={3} />
    </>
  );
};
export default Costs;
