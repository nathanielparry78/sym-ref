import { useState } from 'react';
import styled from 'styled-components';

const Clicker = styled.span`
  cursor: pointer;
  padding: .5rem 1rem;
  background-color: ${({color}) => color};
  filter: saturate(40%);

  color: var(--white);
  user-select: none;
  text-align: center;
  border-radius: 3px;
  width: 100%;

  &:hover {
    filter: saturate(100%);
  }
`

const Button = ({children, onClick, className, color = "maroon"}) => {
  const [ clicked, setClicked ] = useState(false);
  const [ verified, setVerified ] = useState(false)

  return (
    <Clicker onClick={onClick} className={className} color={color}>
      {children}
    </Clicker>
  )
}

export default Button;