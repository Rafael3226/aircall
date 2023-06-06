import styled from "styled-components";
import PropTypes from "prop-types";
import ActivityGroup from "../ActivityGroup";
import { mapActivity } from "../ActivityGroup/ActivityList/mapActivity";
import {
  ActivitySubtitle as Subtitle,
  ActivityTitle as Title,
} from "../ActivityGroup/ActivityList/Activity/Activity.styles";

const DetailsContainer = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px 0px 0px 0px;
`;

const Image = styled.img`
  background-color: gray;
  width: 150px;
  height: 150px;

  border-radius: 100%;
`;

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
