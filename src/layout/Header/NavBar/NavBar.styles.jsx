import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkContainer = styled.nav`
  display: flex;
  gap: 20px;
  padding-top: 15px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: #565656;
  font-size: 0.75rem;
  text-decoration: none;
  font-weight: bold;
  height: 100%;
  border-bottom: 4px solid transparent;
  &.active {
    border-bottom: 4px solid #fc5624;
  }
`;
