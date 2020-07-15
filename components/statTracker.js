import { useState } from 'react';
import styled from 'styled-components';

const Tracker = styled.div`
	font-family: 'IM Fell Great Primer SC';
  display: flex;
  flex-direction: column;
`

const StatName = styled.div`
  text-align: center;
  text-transform: uppercase;
  color: white;
  background: #222;
  padding: .25rem;
`;

const CurrentBox = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  text-align: center;
  grid-template-rows: 2;
  grid-template-areas:
    "current increment"
    "current decrement";
`

const CurrentValue = styled.span`
  align-self: center;
  font-size: 2rem;
  grid-area: current;
`;

const Increment = styled.button`
  grid-area: increment;
  font-size: 1.5rem;
`;

const Decrement = styled.button`
  grid-area: decrement;
  font-size: 1.5rem;
`;

const MaxValue = styled.span`
  font-variant: small-caps;
  font-size: 1.25rem;
  color: #444;
`;

const Gradient = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 10px;

  ${({type}) =>
    type === "Toughness"
      ? `background: maroon;`
      : type === "Corruption"
        ? `background: #fdfdfd;`
        : `background: #212667;`
  }

  &:before {
    position: absolute;
    content: '';
    height: 10px;
    ${({type}) =>
      type === "Toughness"
        ? `background: linear-gradient(to right, darkgreen 40%, green 90%, transparent);`
        : type === "Corruption"
          ? `background: linear-gradient(to right, #222222 40%, #2b1e4c 90%, transparent);`
          : `background: linear-gradient(to right, lightyellow 90%, transparent);;`

    }
    /* border-radius: 5px; */
    top: 0;
    left: 0;
    width: ${({current}) => current + '%'}
  }
`



const StatTracker = ({stat = "", currentValue = "", maxValue = "", className}) => {
  const [value, setValue] = useState(currentValue);

  const handleIncrement = () => {
    value < parseInt(maxValue) && setValue(parseInt(value) + 1)
  }

  const handleDecrement = () => {
    value > 0 && setValue(parseInt(value) - 1)
  }

  return (
    <Tracker className={className}>
      <StatName>{stat}</StatName>
      <Gradient type={stat} current={parseInt((100 * value) / maxValue)}></Gradient>
      <CurrentBox>
        <CurrentValue>{value} / <MaxValue>{maxValue}</MaxValue></CurrentValue>
        <Increment onClick={handleIncrement}>+</Increment>
        <Decrement onClick={handleDecrement}>-</Decrement>
      </CurrentBox>
    </Tracker>
  )
}

export default StatTracker;