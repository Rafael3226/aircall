import PropTypes from "prop-types";
import ActivityGroup from "../ActivityGroup";
import {
  ActivitySubtitle as Subtitle,
  ActivityTitle as Title,
} from "../Activity/Activity.styles";
import {
  DetailsContainer,
  Image,
  ImageContainer,
} from "./ActivityDetails.styles";

const ActivityDetails = ({ group, title, subtitle }) => {
  return (
    <DetailsContainer>
      <ImageContainer>
        <Image />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ImageContainer>
      <ActivityGroup groups={group} isDetail={true} />
    </DetailsContainer>
  );
};

ActivityDetails.propTypes = {
  group: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ActivityDetails;
