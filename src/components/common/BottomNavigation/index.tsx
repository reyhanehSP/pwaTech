"use client";
import React from "react";
import style from "@/components/common/BottomNavigation/bottomNav.module.scss";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TocIcon from "@mui/icons-material/Toc";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { bottomNav } from "@/components/common/BottomNavigation/_types/type";
import { useRouter } from "next/navigation";

const BottomNav: React.FC<bottomNav> = ({ activeRoute }) => {
  const route = useRouter();
  function handleSubmit(url: string) {
    route.push(url);
  }
  const bottomNavList = [
    {
      id: 1,
      label: "داشبورد",
      url: "/main",
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      label: "سفارش‌ها",
      url: "/main/orders",
      icon: <TocIcon />,
    },
    {
      id: 3,
      label: "هزینه‌ها",
      url: "/main/costs",
      icon: <CreditCardIcon />,
    },
    {
      id: 4,
      label: "پشتیبانی",
      url: "/main/support",
      icon: <SupportAgentIcon />,
    },
  ];

  return (
    <BottomNavigation className={style.bottomNavigation} showLabels>
      {bottomNavList.map((item: any) => (
        <BottomNavigationAction
          key={item.id}
          className={`btn-nav ${activeRoute === item.id ? "active" : ""} `}
          label={item.label}
          onClick={() => handleSubmit(item.url)}
          icon={item.icon}
        />
      ))}
    </BottomNavigation>
  );
};
export default BottomNav;
