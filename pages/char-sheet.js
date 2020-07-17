import styled from 'styled-components';
import StatTracker from '../components/statTracker';
import StatBlock from '../components/statBlock';
import {ParsedAbilities} from '../components/parsedAbilities';
import { Simple, Flourish, BottomLine } from '../components/dividers';

import background from '../public/parchment-30.jpg'

const Section = styled.section`
  background: url(${background});
  padding: 2rem 2rem 1rem;
  border-radius: 15px;
  margin-bottom: .5rem;
  box-shadow: var(--shadowDark);
  position: relative;
`

const Header = styled.div`
  margin-top: -0.5rem;

  display: grid;
  grid-template-areas:
    "name occupation"
    "name xp";

    &:after {
      position: absolute;
      content: "";
      height: 2px;
      right: 2rem;
      bottom: 18px;
      border-bottom: 2px solid black;
      width: calc(100% - (45px + 4.5rem));
    }
`

const Image = styled.img`
  height: 44px;
  width: 44px;
  margin-right: .5rem;
  background: #555;
  display: inline-flex;
  outline: 1px solid var(--brown);
`

const Name = styled.div`
	font-family: 'IM Fell Great Primer SC';
  font-size: 2rem;
  grid-area: name;
  display: flex;
  align-items: flex-end;
  color: var(--brown);
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
`

const StyledTracker = styled(StatTracker)`
  outline: 1px solid #222;
`

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Stats = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const AbilityBlock = styled(Section)`
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

  const toughness = (stats || []).filter(item => item.name === "toughness")[0];
  const corruption = (stats || []).filter(item => item.name === "corruption")[0];
  const composure = (stats || []).filter(item => item.name === "composure")[0];

  return (
    <div>
      <Section>
        <Header>
          <Name><Image/>{name}</Name>
          <Occupation>{occupation}</Occupation>
          <XP> Unspent XP: {unspentXP} | Total XP: {totalXP} XP)</XP>
        </Header>
      </Section>
      <Section>
        <Trackers>
          <StyledTracker stat="Toughness" currentValue={toughness && toughness.current} maxValue={toughness && toughness.max}/>
          <StyledTracker stat="Corruption" currentValue={corruption && corruption.current} maxValue={corruption && corruption.max}/>
          <StyledTracker stat="Composure" currentValue={composure && composure.current} maxValue={composure && composure.max}/>
        </Trackers>
        <BottomLine />
        <StatsWrapper>
          <Stats>
            {(stats && stats.slice(0, 4) || []).map(stat => (
              <StatBlock {...stat} key={stat.name} />
            ))}
          </Stats>
          <Stats>
            {(stats && stats.slice(4, 8) || []).map(stat => (
              <StatBlock {...stat} key={stat.name} />
            ))}
          </Stats>
        </StatsWrapper>
      </Section>
      {abilities &&
        <AbilityBlock>
          <Heading>Abilities</Heading>
          <Simple />
          <ParsedAbilities items={abilities}/>
          <Flourish />
        </AbilityBlock>
      }
      {traits &&
        <AbilityBlock>
          <Heading>Traits</Heading>
          <Simple />
          <ParsedAbilities items={traits}/>
          <Flourish />
        </AbilityBlock>
      }
      <Weapons></Weapons>
      <Armor></Armor>
      <Misc></Misc>
      <Contacts></Contacts>
      <Notes></Notes>
    </div>
  )
}

export default CharSheet;