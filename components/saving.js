import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0% {
    left: -100%;
  }
  50% {
    left: 50%;
  }
  100% {
    left: 200%
  }
`

const Bar = styled.div`
  position: fixed;
  z-index: 10;
  top: ${({top}) => top}px;
  left: 0;
  background: #003e18;
  height: 5px;
  width: 100%;

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    background:  linear-gradient(270deg, transparent, #0b9700, transparent);
    width: 100%;
    animation: ${Animation} 2.5s linear infinite;

  }
`

const Saving = ({top = 0}) => (
  <Bar top={top}></Bar>
)

export default Saving;