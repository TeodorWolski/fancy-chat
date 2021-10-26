import styled from "styled-components";

const Avatar = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.moreMint};
  border-radius: 50px;
  background: url(https://avatars.dicebear.com/api/miniavs/:seed.svg) no-repeat;
  height: 60px;
  width: 60px;
  position: relative;
  top: 1rem;
  left: 0.75rem;
  margin-bottom: 2rem;
`;

export default Avatar;
