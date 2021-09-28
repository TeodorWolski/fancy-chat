import styled, { css } from "styled-components";
import MagnifierIcon from "assets/icons/MagnifierIcon.svg";

const Input = styled.input`
  border-radius: 5rem;
  border: none;
  padding: 1.5rem 3rem;
  background-color: hsl(0, 0%, 96%);
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  ::placeholder {
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  ${({ search }) =>
    search &&
    css`
      background-size: 2rem;
      padding: 1rem 0.5rem 1rem 0.5rem;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-position: 12rem;
      background-image: url(${MagnifierIcon});
      background-repeat: no-repeat;
    `}
`;

export default Input;
