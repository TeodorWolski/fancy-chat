import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background: ${({ theme }) => theme.mint};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

export default Button;
