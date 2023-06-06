import PropTypes from "prop-types";
import ActivityIcons from "./ActivityIcons";
import {
  ActivityContainer,
  ActivitySubtitle,
  ActivityTitle,
  DateContainer,
  IconContainer,
  InformationContainer,
  Meridiem,
  ThreeDotsVertical,
  Time,
} from "./Activity.styles.jsx";

const Activity = ({ icon, number, via, time, meridiem }) => {
  return (
    <ActivityContainer>
      <IconContainer>
        <ActivityIcons tag={icon} />
      </IconContainer>
      <InformationContainer>
        <ActivityTitle>{number}</ActivityTitle>
        <ActivitySubtitle>{via}</ActivitySubtitle>
      </InformationContainer>
      <DateContainer>
        <ThreeDotsVertical />
        <Time>{time}</Time>
        <Meridiem>{meridiem}</Meridiem>
      </DateContainer>
    </ActivityContainer>
  );
};

Activity.propTypes = {
  icon: PropTypes.string,
  number: PropTypes.string,
  via: PropTypes.string,
  time: PropTypes.string,
  meridiem: PropTypes.string,
};

export default Activity;
