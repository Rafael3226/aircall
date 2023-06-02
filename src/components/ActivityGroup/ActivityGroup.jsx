import Activity from "../Activity";

const ActivityGroup = () => {
  const list = new Array(100).fill(undefined);
  return (
    <div>
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
  );
};

export default ActivityGroup;
