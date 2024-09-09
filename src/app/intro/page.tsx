
import {Suspense , lazy } from "react";
const Intro = lazy(() =>import("@/components/intro"))
const IntroPage = () => {

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Intro />
      </Suspense>
    );
}

export default IntroPage
