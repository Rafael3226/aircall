import { Suspense } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import Header from "./Header.jsx";
import Loading from "./components/Loading";
import { lazy } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchActivities } from "./store/activities";

const ActivitiesPage = lazy(() => import("./pages/ActivitiesPage.jsx"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <HashRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="*" element={<ActivitiesPage />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;
