import styled from 'styled-components';
import { Simple, Flourish } from '../components/dividers';
import Button from '../components/button';

const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr minmax(80px, 135px) minmax(175px, 300px) 1fr;
  grid-template-areas: ". label input .";
  font-size: 1.5rem;
  text-align: right;
  font-family: var(--fancy);

  & span {
    grid-area: label;
  }

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`

const FieldStyles = `
  font-size: 1rem;
  padding: .25rem .5rem;
  margin-left: 1rem;
  background: var(--white);
  border: 1px solid #666;
  font-family: var(--sans);
  grid-area: input;
`

const Input = styled.input`
  ${FieldStyles}

  ${({gridArea}) => gridArea && `grid-area: ${gridArea}`}
`

const TextArea = styled.textarea`
  ${FieldStyles}
`

const Double = styled.label`
  display: grid;
  grid-template-columns: 1fr minmax(80px, 175px) minmax(88px, 98px) minmax(88px, 98px) 1fr;
  grid-template-areas: ". label input1 input2 .";
  font-size: 1.5rem;
  text-align: right;
  font-family: var(--fancy);

  & span {
    grid-area: label;
  }

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`

const FatFlourish = styled(Flourish)`
  margin-bottom: 2rem;
  position: relative;
`

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: ". button .";
  padding: 1rem;

  & span {
    grid-area: button;
    justify-self: center;
  }
`

const TextBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(255px, 435px) 1fr;
  grid-template-areas:
    " . text . "
    " . pre . ";
  margin-bottom: 1rem;

  & p {
    grid-area: text;
    margin-top: 0;
    display: block;
    position: relative;
    line-height: 1.3;

  }
  & pre {
    grid-area: pre;
    white-space: normal;
    background: #ffffff85;
    padding: 1rem;
    border-radius: 5px;
  }
`



const createName = (string) => {
  const initial = string.slice(0, 1).toLowerCase();
  const name = string.slice(1).replace(/\s\./g, '')

  return initial + name;
}

const ButtonWrapper = ({onClick, children, color}) => (
  <Wrapper>
    <Button onClick={onClick} color={color}>{children}</Button>
  </Wrapper>
)

const TextField = ({label, placeholder, type = "text", onChange}) => (
  <Label><span>{label}</span>
    <TextArea name={createName(label)} type={type} placeholder={placeholder} />
  </Label>
)

const InputBlock = ({handleChange, label, placeholder, type = "text", min = "5", max = "20"}) => (
  <Label><span>{label}</span>
    <Input
      onChange={handleChange}
      name={createName(label)}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
    />
  </Label>
)

const DoubleBlock = ({handleChange, label, placeholder, type = "text", min = "5", max = "20"}) => (
  <Double><span>{label}</span>
    <Input
      onChange={handleChange}
      name={`${createName(label)}-current`}
      type={type}
      min={min}
      max={max}
      placeholder="Cur."
      gridArea={"input1"}
    />
    <Input
      onChange={handleChange}
      name={`${createName(label)}-max`}
      type={type}
      min={min}
      max={max}
      placeholder="Max"
      gridArea={"input2"}
    />
  </Double>

)

const CharForm = ({
  handleBasic,
  handleStats,
  handleAbilities,
  submitBasic,
  submitStats,
  submitAbilities
}) => {

  return (
    <>
      <form onChange={handleBasic}>
        {/* Basic Info */}
        <InputBlock label="Name" placeholder="Name" />
        <InputBlock label="Race" placeholder="Race"/>
        <InputBlock label="Occupation" placeholder="Occupation"/>

        <Simple/>

        <InputBlock label="Total XP" placeholder="Total XP" type="number" max="100"/>
        <InputBlock label="Unspent XP" placeholder="Unspent XP" type="number" max="100" />
        <ButtonWrapper onClick={submitBasic} color={'var(--blue)'}>Save Basic Info</ButtonWrapper>
      </form>

      <FatFlourish />

      <form onChange={handleStats}>
        {/* Attributes */}
        <InputBlock label="Accurate" placeholder="5" type="number"/>
        <InputBlock label="Cunning" placeholder="5" type="number"/>
        <InputBlock label="Discreet" placeholder="5" type="number"/>
        <InputBlock label="Persuasive" placeholder="5" type="number"/>
        <InputBlock label="Quick" placeholder="5" type="number"/>
        <InputBlock label="Resolute" placeholder="5" type="number"/>
        <InputBlock label="Strong" placeholder="5" type="number"/>
        <InputBlock label="Vigilant" placeholder="5" type="number"/>

        <Simple/>

        {/* Derived Attributes */}
        <DoubleBlock label="Toughness" type="number"/>
        <DoubleBlock label="Composure" type="number"/>
        <DoubleBlock label="Corruption" type="number"/>
        <ButtonWrapper onClick={submitStats} color={'var(--blue)'}>Save Stats</ButtonWrapper>

      </form>

      <FatFlourish />
      <TextBlock>
        <p>
          Abilities and Traits <em>must</em> be formatted in a particular way, or they will not be added to the character view. Add abilities, boons, burdens, powers, rituals, etc in a comma-separated list with the tier in parenthesis. <br/><br/>For example:
        </p>
        <pre>
          Curse (III), Leader (novice), Ritualist (adept), Heretic's Trail (I), Exchange Shadow (I), Alternative Damage (II)
        </pre>
      </TextBlock>

      <form onChange={handleAbilities}>
        {/* Abilities */}
        <TextField label="Abilities" placeholder="Abilities"/>

        {/* Traits */}
        <TextField label="Traits" placeholder="Traits"/>
        <ButtonWrapper onClick={submitAbilities} color={'var(--blue)'}>Save Abilities</ButtonWrapper>

      </form>
    </>
  )
}

export default CharForm;