import styled from "styled-components";
import Card from "./card";
import Heading from "./heading";

const Page = styled(Card)`
  width: 90vw;
  margin-top: 2vh;
  max-width: calc(90vw - 4rem);
  padding-top: .5rem;
`

const Item = styled.li`
  padding-bottom: 1rem;
  list-style: none;
`

const Label = styled.div`
  color: var(--brown);
  font-weight: 700;
  font-size: 1.1em;
`

const Reference = styled.span`
  font-size: .85rem;
`;

const Rule = ({name, text}) => (
  <Item>
    <Label>{name}</Label>{text}
  </Item>
)


const RulesList = ({title, items, reference}) => {
  return(
  <Page>
    <Heading>{title} <Reference>({reference})</Reference></Heading>
    {(items || []).map((item, i) => <Rule {...item} key={i}/>)}
  </Page>)
}

export default RulesList;