import styled from "styled-components";
import PropTypes from "prop-types";
import { BsEmojiDizzy } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const DefaultPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding-top: 70px;

  color: #bcbcbc;
  svg {
    width: 120px;
    height: auto;
  }
`;

const DefaultPageTitle = styled.span`
  font-size: 1.5rem;
`;

const GoToActivities = styled.button`
  background-color: #bcbcbc;
  font-size: 1rem;
  color: #fff;

  padding: 5px 30px;

  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  &:hover {
    background-color: #999;
  }
`;

const DefaultPage = ({ title, showButton }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <DefaultPageContainer>
      <BsEmojiDizzy />
      <DefaultPageTitle>{title}</DefaultPageTitle>
      {showButton && (
        <GoToActivities onClick={handleClick}>Activity</GoToActivities>
      )}
    </DefaultPageContainer>
  );
};

DefaultPage.propTypes = {
  title: PropTypes.string,
  showButton: PropTypes.bool,
};

export default DefaultPage;
