import { Suspense } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import Header from "./Header.jsx";
import Loading from "./components/Loading";
import { lazy } from "react";

const ActivitiesPage = lazy(() => import("./pages/ActivitiesPage.jsx"));

const App = () => {
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
