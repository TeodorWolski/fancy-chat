import styled from "styled-components";

const ButtonIcon = styled.button`
  height: 5rem;
  width: 5rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  /* background-color: ${({ active }) => (active ? "white" : "transparent")}; */
  border-radius: 1.5rem;
  border: none;
  display: block;
  background-size: 68%;
  background-position: center;
  cursor: pointer;
  margin: 1rem;
`;

export default ButtonIcon;
