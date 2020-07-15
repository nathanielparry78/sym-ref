import styled from "styled-components";
import background from "../public/parchment-30.jpg"

const Wrapper = styled.div`
  max-width: 450px;
  width: 80vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  background: url(${background});
  border-radius: 15px;
  box-shadow: 0px 4px 7px 3px #000;
  margin: 10vh auto;
  padding: 1.5rem 2rem;
`

const Card = ({children, className}) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
)

export default Card;