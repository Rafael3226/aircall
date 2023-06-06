import PropTypes from "prop-types";
import ActivityGroup from "../ActivityGroup";
import { mapActivity } from "../../util/mapActivity";
import {
  ActivitySubtitle as Subtitle,
  ActivityTitle as Title,
} from "../Activity/Activity.styles";
import {
  DetailsContainer,
  Image,
  ImageContainer,
} from "./ActivityDetails.styles";

const ActivityDetails = ({ group }) => {
  const activity = Object.values(group)[0][0];
  const { title, via } = mapActivity(activity);
  return (
    <DetailsContainer>
      <ImageContainer>
        <Image />
        <Title>{title}</Title>
        <Subtitle>{via}</Subtitle>
      </ImageContainer>
      <ActivityGroup groups={group} isDetail={true} />
    </DetailsContainer>
  );
};

ActivityDetails.propTypes = {
  group: PropTypes.object,
};

export default ActivityDetails;
