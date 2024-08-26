import type { Metadata } from "next";
import "./globals.css";
import ToastWrapper from "@/utils/ToastNotification/ToastContainer";
import CustomTheme from "@/theme/customTheme";
import SplashScreen from "@/components/spalshScreen";

export const metadata: Metadata = {
  title: "پنل تکنسین های الو بگو",
  description: "تعمیرات لوازم خانگی",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  themeColor: [{ color: "#fff" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "assets/icons/icon128.png" },
    { rel: "icon", url: "assets/icons/icon128.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir={"rtl"}>
      <body>
        <CustomTheme>
          <ToastWrapper>
            <SplashScreen>{children}</SplashScreen>
          </ToastWrapper>
        </CustomTheme>
      </body>
    </html>
  );
}
