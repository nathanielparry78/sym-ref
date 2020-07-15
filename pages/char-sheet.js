import styled from 'styled-components';
import StatTracker from '../components/statTracker';
import StatBlock from '../components/statBlock';
import {ParsedAbilities} from '../components/parsedAbilities';

import divider1 from "../public/divider.png";
import divider2 from "../public/bottom-line.png";
import divider3 from "../public/simple1.png";

const Header = styled.div`
  display: grid;
  grid-template-areas:
    "name occupation"
    "name xp";
`

const Name = styled.div`
	font-family: 'IM Fell Great Primer SC';
  font-size: 2rem;
  grid-area: name;
  display: flex;
  align-items: flex-end;
`

const Occupation = styled.div`
  grid-area: occupation;
  text-align: right;
  font-size: .75rem;
`

const XP = styled.div`
  grid-area: xp;
  text-align: right;
  font-size: .75rem;
`

const Heading = styled.div`
  font-size: 1.75rem;
	font-family: 'IM Fell Great Primer SC';
  text-align: center;
`
const Trackers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3vw;
  margin-bottom: 1rem;
  border-top: 3px solid #222;
  padding-top: 1rem;
`

const StyledTracker = styled(StatTracker)`
  outline: 1px solid #222;
`

const Divider = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-items: center;
  border: red;
  ${({type}) => type === "one" && `
    background: url(${divider1}) no-repeat center;
    height: 20px;
    margin: 1rem 0;
  `}
  ${({type}) => type === "two" && `
    background: url(${divider2}) no-repeat center;
    height: 20px;
    margin: 1rem 0;
  `}
  ${({type}) => type === "three" && `
    background: url(${divider3}) no-repeat center;
    height: 7px;
    margin: .5rem 0;
  `}
`

const Stats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`
const AbilityBlock = styled.div`
  margin-bottom: 2rem;
`
const Weapons = styled.div``
const Armor = styled.div``
const Misc = styled.div``
const Contacts = styled.div``
const Notes = styled.div``


const CharSheet = ({
  name,
  occupation,
  totalXP,
  unspentXP,
  stats,
  toughness,
  corruption,
  composure,
  abilities,
  traits,
  gear: {
    weapons,
    armor,
    misc
  } = {},
  contacts,
  notes
}) => {

  return (
    <div>
      <Header>
        <Name>{name}</Name>
        <Occupation>{occupation}</Occupation>
        <XP> Unspent XP: {unspentXP} | Total XP: {totalXP} XP)</XP>
      </Header>
        <Trackers>
          <StyledTracker stat="Toughness" currentValue={toughness.current} maxValue={toughness.max}/>
          <StyledTracker stat="Corruption" currentValue={corruption.current} maxValue={corruption.max}/>
          <StyledTracker stat="Composure" currentValue={composure.current} maxValue={composure.max}/>
        </Trackers>
      <Divider type="two"/>
      <Stats>
        {stats.map(stat => (
          <StatBlock {...stat} key={stat.name} />
        ))}
      </Stats>
      <Divider type="two"/>
      {abilities &&
        <AbilityBlock>
          <Heading>Abilities</Heading>
          <Divider type="three"/>
          <ParsedAbilities items={abilities}/>
        </AbilityBlock>
      }
      {traits &&
        <AbilityBlock>
          <Heading>Traits</Heading>
          <Divider type="three"/>
          <ParsedAbilities items={traits}/>
        </AbilityBlock>
      }
      <Weapons></Weapons>
      <Armor></Armor>
      <Misc></Misc>
      <Contacts></Contacts>
      <Notes></Notes>
      <Divider type="one" />
    </div>
  )
}

export default CharSheet;