import { formatTime, formatTimeType } from "../../../util/dates";

export const mapActivity = ({
  direction,
  call_type,
  from,
  to,
  via,
  created_at,
  activities = [],
}) => {
  const mapped = {};

  mapped.icon = getIcon({ direction, call_type }) || "default";
  mapped.title = getTitle({ direction, from, to }) || "Unknown";
  mapped.title += "";
  mapped.via = `Via ${via || "Unknown"}`;
  mapped.time = formatTime(created_at) || "--:--";
  mapped.meridiem = formatTimeType(created_at) || "--";
  mapped.count = activities.length || 0;
  mapped.color = call_type === "missed" ? "red" : "";

  return mapped;
};

const getIcon = ({ direction, call_type }) => {
  if (direction === "inbound" && call_type === "voicemail") return "voicemail";
  if (direction === "inbound" && call_type === "missed") return "missed";
  if (direction === "outbound") return "outbound";
  if (direction === "inbound") return "inbound";
  return "";
};

const getTitle = ({ direction, from, to }) => {
  return direction === "inbound" ? from : to;
};
