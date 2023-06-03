import Header from "./Header.jsx";
import ActivityGroup from "./components/ActivityGroup/ActivityGroup.jsx";

const App = () => {
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
