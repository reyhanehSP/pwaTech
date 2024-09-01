"use client";
import {Container} from "@mui/material";
import { useRouter } from "next/navigation";
import style from "@/components/panel/costs/_styles/Cost.module.scss";
import Link from "next/link";
import BottomNav from "@/components/common/BottomNavigation";
import TopNavigation from "@/components/common/TopNavigation";
import BreadCrumbs from "@/components/common/BreadCrumb";
import InputSearch from "@/components/common/InputSearch/InputSearch";
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
            { title: "صفحه اصلی", url: "/main" },
            { title: "هزینه ها", url: "/mian/costs" },
          ]}
        />

        <div className={style.mainLayout}>
          <p className={style.title}>
            سفارش مورد نظر را برای وارد کردن هزینه انتخاب کنید.
          </p>

          <InputSearch />

          <Link className={style.expenseCard} href={`/main/costs/1`}>
            <ul>
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
          <Link className={style.expenseCard} href={`/main/costs/1`}>
            <ul>
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
