import Header from "./Header.jsx";
import Activity from "./components/Activity/Activity.jsx";
//import useActivity from "./hooks/useActivity.js";

const App = () => {
  // const x = useActivity();
  const list = new Array(100).fill(undefined);
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        {list.map((item, i) => (
          <Activity
            key={i}
            icon="inbound"
            number="+1 647 295 7559"
            via="via 1"
            time="4:20"
            meridiem="PM"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
