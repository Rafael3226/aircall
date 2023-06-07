import PropTypes from "prop-types";
import ActivityIcons from "../ActivityIcons";
import {
  ActivityContainer,
  ActivitySubtitle,
  ActivityTitle,
  ArchiveButtonContainer,
  Counter,
  DateContainer,
  IconContainer,
  InformationContainer,
  Meridiem,
  ThreeDotsVertical,
  Time,
  TitleContainer,
} from "./Activity.styles.jsx";
import ArchiveButton from "../ArchiveButton";

const Activity = ({
  id,
  icon,
  title,
  subTitle,
  time,
  meridiem,
  count,
  onClick,
  isDetail,
  isArchived,
}) => {
  return (
    <ActivityContainer onClick={onClick} isDetail={isDetail}>
      <IconContainer>
        <ActivityIcons tag={icon} />
      </IconContainer>
      <InformationContainer>
        <TitleContainer>
          <ActivityTitle>{title}</ActivityTitle>
          {count > 1 && <Counter>{count}</Counter>}
        </TitleContainer>
        <ActivitySubtitle>{subTitle}</ActivitySubtitle>
      </InformationContainer>

      <ArchiveButtonContainer>
        {isDetail && <ArchiveButton id={id} isArchived={isArchived} />}
      </ArchiveButtonContainer>

      <DateContainer>
        <ThreeDotsVertical />
        <Time>{time}</Time>
        <Meridiem>{meridiem}</Meridiem>
      </DateContainer>
    </ActivityContainer>
  );
};

Activity.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  time: PropTypes.string,
  meridiem: PropTypes.string,
  count: PropTypes.number,
  onClick: PropTypes.func,
  isDetail: PropTypes.bool,
  isArchived: PropTypes.bool,
};

export default Activity;
