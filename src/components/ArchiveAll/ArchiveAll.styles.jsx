import styled from "styled-components";

export const ArchiveAllContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 10px;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  svg {
    color: #bcbcbc;
    width: 24px;
    height: auto;
  }
`;

export const ArchiveAllTitle = styled.span`
  padding-left: 20px;
  color: #bcbcbc;
  font-size: 0.8rem;
  font-weight: bold;
`;
