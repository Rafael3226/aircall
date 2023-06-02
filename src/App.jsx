import Header from "./Header.jsx";
import ActivityGroup from "./components/ActivityGroup/ActivityGroup.jsx";
import useActivity from "./hooks/useActivity.js";

const App = () => {
  const { loading, unarchived, archived } = useActivity();
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <ActivityGroup />
      </div>
    </div>
  );
};

export default App;
