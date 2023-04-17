import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import React, { Suspense } from "react";
const Main = React.lazy(() => import("../components/Main/Main"));

const Country = () => {
  const params = useParams();

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Main country={`${params.country}`} />
      </Suspense>
    </>
  );
};

export default Country;
