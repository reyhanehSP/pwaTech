'use client'
import AppImage from "@/components/common/AppImage";
import style from '@/components/NotFound/NotFound.module.scss'
import { Box, Typography } from "@mui/material";
import AppButtonNew from '@/components/common/AppButtonNew'
import { useRouter } from "next/navigation";
export default function NotFound() {
  const route = useRouter()
  return (
    <>
      <Box className={style.layout}>
        <Typography component="h1">یافت نشده! </Typography>
        <Box className={style.main}>
          <AppImage
            src={"/assets/images/not-found.png"}
            width={window.innerWidth > 820 ? 420 : 350}
            height={window.innerHeight > 820 ? 420 : 280}
          />
          <AppButtonNew
            text="بازگشت به صفحه اصلی"
            color="linear-gradient(to top, rgba(236, 163, 35, 1), rgba(236, 133, 54, 1))"
            onClick={() => route.push('/')}
          />
        </Box>
      </Box>
    </>
  );
}