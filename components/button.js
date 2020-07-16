import { useState } from 'react';
import styled from 'styled-components';

const Clicker = styled.span`
  cursor: pointer;
  padding: .25rem .75rem;
  background: maroon;
  color: white;
  user-select: none;
`

const Button = ({children, onClick}) => {
  const [ clicked, setClicked ] = useState(false);
  const [ verified, setVerified ] = useState(false)

  return (
    <Clicker onClick={onClick}>
      {children}
    </Clicker>
  )
}

export default Button;