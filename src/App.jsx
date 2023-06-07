import { Suspense } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import Header from "./layout/Header";
import Loading from "./components/Loading";
import { lazy } from "react";
import { useSelector } from "react-redux";
import ActivityDetailsPage from "./pages/ActivityDetailsPage";
import { selectLoading } from "./store/loading/selectors";

const ActivityPage = lazy(() => import("./pages/ActivityPage.jsx"));
const ArchivedActivityPage = lazy(() =>
  import("./pages/ArchivedActivityPage.jsx")
);

const App = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <div className="container">
      <HashRouter>
        <Header />
        <div className="container-view">
          {isLoading && <Loading />}
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/details" element={<ActivityDetailsPage />} />
              <Route path="/archived" element={<ArchivedActivityPage />} />
              <Route path="*" element={<ActivityPage />} />
            </Routes>
          </Suspense>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
