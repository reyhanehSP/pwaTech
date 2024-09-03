"use client";
import {Container} from "@mui/material";
import style from "@/components/panel/costs/_styles/Cost.module.scss";
import Link from "next/link";
import BottomNav from "@/components/common/BottomNavigation";
import TopNavigation from "@/components/common/TopNavigation";
import BreadCrumbs from "@/components/common/BreadCrumb";
import InputSearch from "@/components/common/InputSearch/InputSearch";
const Costs = () => {
  return (
    <>
      <TopNavigation />
      <Container maxWidth="lg" className={style.wrapper}>
        <BreadCrumbs items={[{ title: "هزینه ها", url: "/mian/costs" }]} />

        <div className={style.mainLayout}>
          <p className={style.title}>
            سفارش مورد نظر را برای وارد کردن هزینه انتخاب کنید.
          </p>

          <InputSearch />

          <Link className={`valid ${style.expenseCard}`} href={`/main/costs/1`}>
            <ul>
              <li>
                <span>جمع کل</span>
                <span>1450 ریال</span>
              </li>
              <li>
                <span>کد سفارش :</span>
                <span>123</span>
              </li>
              <li>
                <span>تاریخ :</span>
                <span>1403/02/02</span>
              </li>
              <li>
                <span>کرج حصار</span>
              </li>
            </ul>
          </Link>
          <Link
            className={`invalid ${style.expenseCard}`}
            href={`/main/costs/1`}
          >
            <ul>
              <li>
                <span>جمع کل</span>
                <span style={{color: "red"}}>مشخص نشده است</span>
              </li>
              <li>
                <span>کد سفارش :</span>
                <span>123</span>
              </li>
              <li>
                <span>تاریخ :</span>
                <span>1403/02/02</span>
              </li>
              <li>
                <span>کرج حصار</span>
              </li>
            </ul>
          </Link>
        </div>
        <BottomNav activeRoute={3} />
      </Container>
      <BottomNav activeRoute={3} />
    </>
  );
};
export default Costs;
