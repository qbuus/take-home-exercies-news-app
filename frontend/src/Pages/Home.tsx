// import Main from "../components/Main/Main";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import React, { Suspense } from "react";
const Main = React.lazy(() => import("../components/Main/Main"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Main country="pl" />
      </Suspense>
    </>
  );
};

export default Home;
