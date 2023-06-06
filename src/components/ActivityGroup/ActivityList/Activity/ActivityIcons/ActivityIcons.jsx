import PropTypes from "prop-types";
import { ICONS } from "./icons";

const ActivityIcons = ({ tag }) => {
  const icon = ICONS[tag] ?? ICONS.default;
  return icon;
};

ActivityIcons.propTypes = {
  tag: PropTypes.string,
};

export default ActivityIcons;
