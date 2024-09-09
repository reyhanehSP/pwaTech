import { lazy, Suspense } from "react";
import SpinnerFullPage from "@/components/common/SpinnerFullPage";
const Wellcome = lazy(() => import("@/components/welcome"));


const WellcomePage = () => {
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <Wellcome />
    </Suspense>
  );
};
export default WellcomePage;
