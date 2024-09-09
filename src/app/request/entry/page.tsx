import { lazy, Suspense } from "react";
import SpinnerFullPage from "@/components/common/SpinnerFullPage";
const Entry = lazy(() => import("@/components/request/entry"));

const IntroPage = () => {
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <Entry />
    </Suspense>
  );
};

export default IntroPage;
