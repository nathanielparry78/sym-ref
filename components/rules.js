import styled from "styled-components";

const Item = styled.li`
  padding-bottom: 1rem;
  list-style: none;
  color: #999;
`

const Label = styled.div`
  color: #ccc;
  font-weight: 700;
  font-size: 1.1em;
`

const H1 = styled.h1`
  /* @import url('https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer+SC&display=swap'); */
	font-family: 'IM Fell Great Primer SC';
	padding: 0;
	font-size: 24px;
  color: #666;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    height: 2px;
    background: #666;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;

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
  <>
    <H1>{title} <Reference>({reference})</Reference></H1>
    {(items || []).map((item, i) => <Rule {...item} key={i}/>)}
  </>)
}

export default RulesList;