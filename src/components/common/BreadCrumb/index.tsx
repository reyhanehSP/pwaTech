"use client";
import React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import style from "@/components/common/BreadCrumb/BreadCrumbs.module.scss"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BreadCrumbType } from "@/components/common/BreadCrumb/_types/type";
import { useRouter } from "next/navigation";
const StyledBreadcrumb = styled(Chip)(({ theme }) => {

  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadCrumbs: React.FC<BreadCrumbType> = ({ items }) => {
 const router = useRouter();

  return (
    <div role="presentation" className={style.layout} onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {items.map((item: any, index: number) => (
          <StyledBreadcrumb
            key={index}
            component="a"
            href={item.url}
            label={item.title}
          />
        ))}
      </Breadcrumbs>
      <button
        className={style.backBtn}
        aria-label="back"
        onClick={() => router.back()}
      >
        <ArrowBackIcon />
      </button>
    </div>
  );
};
export default BreadCrumbs;
 

