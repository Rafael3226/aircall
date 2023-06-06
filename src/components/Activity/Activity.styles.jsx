import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";

const ActivityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 0 16px 16px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 24px;
    width: auto;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ActivityTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;
const ActivitySubtitle = styled.span`
  font-size: 0.8rem;
  color: #bcbbbc;
`;

const DateContainer = styled.span`
  display: flex;
`;

const Time = styled.span`
  color: #bcbbbc;
  font-weight: bold;
  padding: 4px;
  font-size: 0.75rem;
`;

const Meridiem = styled.span`
  color: #bcbbbc;
  font-weight: bold;
  border-top: 1px solid #efefef;
  border-left: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  padding: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 0.75rem;
`;
const ThreeDotsVertical = styled(BsThreeDotsVertical)`
  color: rgba(0, 0, 0, 0.1);
`;

export {
  ActivityContainer,
  IconContainer,
  InformationContainer,
  ActivityTitle,
  ActivitySubtitle,
  DateContainer,
  Time,
  Meridiem,
  ThreeDotsVertical,
};
