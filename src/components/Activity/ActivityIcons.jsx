import PropTypes from "prop-types";
import { ICONS } from "../../constant";

const ActivityIcons = ({ tag }) => {
  const Icon = ICONS[tag] ?? ICONS.default;
  return <Icon />;
};

ActivityIcons.propTypes = {
  tag: PropTypes.string,
};

export default ActivityIcons;
