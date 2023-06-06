import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";

export const ActivityContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 16px 0 16px 16px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 24px;
    width: auto;
  }
`;

export const InformationContainer = styled.div`
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ActivityTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

export const ActivitySubtitle = styled.span`
  font-size: 0.8rem;
  color: #bcbbbc;
`;

export const DateContainer = styled.span`
  margin-left: auto;
  display: flex;
`;

export const Time = styled.span`
  color: #bcbbbc;
  font-weight: bold;
  padding: 4px;
  font-size: 0.75rem;
`;

export const Meridiem = styled.span`
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

export const ThreeDotsVertical = styled(BsThreeDotsVertical)`
  color: rgba(0, 0, 0, 0.1);
`;

export const Counter = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 16px;
  color: #fff;
  background-color: #ee481b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 0.75rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 4px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
