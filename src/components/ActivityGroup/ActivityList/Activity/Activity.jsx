import PropTypes from "prop-types";
import ActivityIcons from "./ActivityIcons/ActivityIcons";
import {
  ActivityContainer,
  ActivitySubtitle,
  ActivityTitle,
  Counter,
  DateContainer,
  IconContainer,
  InformationContainer,
  Meridiem,
  ThreeDotsVertical,
  Time,
  TitleContainer,
} from "./Activity.styles.jsx";

const Activity = ({ icon, title, via, time, meridiem, count, onClick }) => {
  return (
    <ActivityContainer onClick={onClick}>
      <IconContainer>
        <ActivityIcons tag={icon} />
      </IconContainer>
      <InformationContainer>
        <TitleContainer>
          <ActivityTitle>{title}</ActivityTitle>
          {count !== 0 && <Counter>{count}</Counter>}
        </TitleContainer>
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
  title: PropTypes.string,
  via: PropTypes.string,
  time: PropTypes.string,
  meridiem: PropTypes.string,
  count: PropTypes.number,
  onClick: PropTypes.func,
};

export default Activity;
