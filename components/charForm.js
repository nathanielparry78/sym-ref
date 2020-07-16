import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Simple, Flourish } from '../components/dividers';
import Button from '../components/button';

const Label = styled.label`
  display: grid;
  grid-template-columns: 1fr 175px minmax(175px, 300px) 1fr;
  grid-template-areas: ". label input .";
  font-size: 1.5rem;
  text-align: right;
  font-family: var(--fancy);

  & span {
    grid-area: label;
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
`

const TextArea = styled.textarea`
  ${FieldStyles}
`

const createName = (string) => {
  const test = string.slice(0, 1).toLowerCase();
  const name = string.slice(1).replace(/\s\./g, '')

  return test + name;
}

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
        <Button onClick={submitBasic}>Save Basic Info</Button>
      </form>

      <Flourish />

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
        <InputBlock label="Toughness" placeholder="10" type="number"/>
        <InputBlock label="Corr. Thresh." placeholder="10" type="number"/>
        <InputBlock label="Composure" placeholder="10" type="number"/>
        <Button onClick={submitStats}>Save Stats</Button>

      </form>

      <Flourish />

      <form onChange={handleAbilities}>
        {/* Abilities */}
        <TextField label="Abilities" placeholder="Abilities"/>

        {/* Traits */}
        <TextField label="Traits" placeholder="Traits"/>
        <Button onClick={submitAbilities}>Save Abilities</Button>

      </form>
    </>
  )
}

export default CharForm;