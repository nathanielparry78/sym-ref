import styled from 'styled-components';
import frame from "../public/frame.png";
import svgFrame from "../public/frame.svg";

const Block = styled.div`
	font-family: 'IM Fell Great Primer SC';
  background: url(${svgFrame}) no-repeat;
  height: 140px;
  width: 90px;
  min-width: 90px;
  background-size: contain;
  text-align: center;
  padding-top: 10px;
`

const Stat = styled.div`
  text-transform: uppercase;
  font-size: 10px;
  background: #222;
  padding: .25rem 0;
  color: white;
  margin: 0 8px;
`;

const Value = styled.div`
  font-size: 2.5rem;
`
const Mod = styled.div`
  margin-top: 4px;
  font-size: 1.25rem;
`

const StatBlock = ({name, value, mod}) => (
  <Block>
    <Value>{value}</Value>
    <Stat>{name}</Stat>
    <Mod>{mod}</Mod>
  </Block>
);

export default StatBlock;