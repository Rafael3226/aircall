import {
  EllipsisContainer,
  EllipsisDot1,
  EllipsisDot2,
  EllipsisDot3,
  EllipsisDot4,
  LoadingContainer,
  LoadingOverlay,
} from "./Loading.styles";

const Loading = () => {
  return (
    <LoadingOverlay>
      <LoadingContainer>
        <EllipsisContainer className="lds-ellipsis">
          <EllipsisDot1 />
          <EllipsisDot2 />
          <EllipsisDot3 />
          <EllipsisDot4 />
        </EllipsisContainer>
      </LoadingContainer>
    </LoadingOverlay>
  );
};

export default Loading;
