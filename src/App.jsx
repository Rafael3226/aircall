import { Suspense } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import Header from "./layout/Header";
import Loading from "./components/Loading";
import { lazy } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchActivities } from "./store/activities";
import ActivityDetailsPage from "./pages/ActivityDetailsPage";

const ActivitiesPage = lazy(() => import("./pages/ActivitiesPage.jsx"));
const ArchivedActivitiesPage = lazy(() =>
  import("./pages/ArchivedActivitiesPage.jsx")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return (
    <div className="container">
      <HashRouter>
        <Header />
        <div className="container-view">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/details" element={<ActivityDetailsPage />} />
              <Route path="/archived" element={<ArchivedActivitiesPage />} />
              <Route path="*" element={<ActivitiesPage />} />
            </Routes>
          </Suspense>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
