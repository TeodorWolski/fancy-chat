import styled from "styled-components";
import Heading from "components/atoms/Heading/Heading";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  grid-column: 2/2;
  display: flex;
  flex-direction: column;
`;

export const StyledHeading = styled(Heading)`
  font-size: 3rem;
  position: relative;
  top: 0.5rem;
  right: 20rem;

  &::before {
    content: "# ";
    color: ${({ theme }) => theme.colors.moreMint};
  }
`;

export const ChatMessages = styled.div`
  overflow-y: scroll;
`;
