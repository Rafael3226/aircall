import PropTypes from "prop-types";
import styled from "styled-components";

import ActivityList from "../ActivityList";

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DivitionContainer = styled.div`
  border-bottom: 1px dashed #bdbdbc;
  text-align: center;
  height: 8px;
  margin-bottom: 10px;
  color: #bdbdbc;
  margin: 16px 0;
`;
const DivitionText = styled.span`
  padding: 0 12px;
  font-weight: bold;
  background: #ffffff;
  letter-spacing: 1px;
`;

const ActivityGroup = ({ groups }) => {
  return (
    <>
      {groups.map((g, i) => (
        <GroupContainer key={i}>
          <DivitionContainer>
            <DivitionText>123</DivitionText>
          </DivitionContainer>
          <ActivityList activities={[1, 2, 3]} />
        </GroupContainer>
      ))}
    </>
  );
};

ActivityGroup.propTypes = {
  groups: PropTypes.array,
};

export default ActivityGroup;
