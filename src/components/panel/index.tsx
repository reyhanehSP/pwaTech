"use client";
import { BottomNavigation, BottomNavigationAction, Container } from "@mui/material";
import Link from "next/navigation";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

const Dashboard = () => {
    const [value, setValue] = useState(0);

    return (
      <>
        {/* <Container maxWidth="lg" className="h-full">
      <div className="main-layout">
        <div className="flex flex-col">
          <Link href="/main/order">سفارش‌ها</Link>
          <Link href="/main/cost">هزینه ها</Link>
          <Link href="/main/support">پشتیبانی</Link>
          <Link href="/main/profile">پروفایل</Link>
        </div>
      </div>
    </Container> */}
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="سفارش‌ها" icon={<RestoreIcon />} />
          <BottomNavigationAction label="هزینه ها" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="پشتیبانی" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </>
    );
 
  }
export default Dashboard;
