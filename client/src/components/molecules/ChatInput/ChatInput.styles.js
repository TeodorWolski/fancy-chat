import styled from "styled-components";

export const Input = styled.input`
  position: relative;
  top: 78rem;
  right: 7rem;
  height: 5rem;
  width: 40rem;
  padding: 2.5rem;
  border-radius: 5rem;
  border: 2px solid ${({ theme }) => theme.colors.moreMint};
  font-size: ${({ theme }) => theme.fontSize.s};

  &:focus {
    color: ${({ theme }) => theme.colors.moreMint};
  }
`;
