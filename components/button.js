import { useState, useEffect } from 'react';
import styled from 'styled-components';

import check from "../public/check-mark.png";

const Clicker = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: .5rem 1rem;
  background-color: ${({color}) => color};
  filter: saturate(40%);

  color: var(--white);
  user-select: none;
  text-align: center;
  border-radius: 3px;
  width: 100%;
  transition: width 1s, height 1s;
  align-items: center;

  &:hover {
    filter: saturate(100%);
  }

  ${({clicked}) => clicked && `
    transition: width 1s, height 1s;
    background-color: #999;
    filter: saturate(100%);
    padding: 5px 1rem;
    cursor: default;
  `}

  ${({verified}) => verified &&
    `transition: width .5s, height .5s;
    background-color: var(--green);
    filter: saturate(100%);
    cursor: default;
    padding: 8px 1rem;
    width: 6rem;
    `
  }
`

const Loading = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" r="0" fill="none" stroke="#ccc" strokeWidth="5">
      <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;44" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.5s"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.5s"></animate>
    </circle>
    <circle cx="50" cy="50" r="0" fill="none" stroke="#ffffff" strokeWidth="5">
      <animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;44" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
      <animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
    </circle>
  </svg>
)

const Button = ({children, onClick, className, color = "maroon", isVerified}) => {
  const [ clicked, setClicked ] = useState(false);
  const [ verified, setVerified ] = useState(false)

  const handleClick = () => {
    setClicked(true);
    onClick()
  }

  useEffect(() => {
    setVerified(isVerified)
  }, [isVerified])


  return (
    <Clicker onClick={handleClick} className={className} color={color} clicked={clicked} verified={verified}>
      {!clicked
        ? children
        : verified
          ? <img src={check} />
          : <Loading />
      }
    </Clicker>
  )
}

export default Button;