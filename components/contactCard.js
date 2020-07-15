import styled from 'styled-components';
import MarkdownRenderer from 'react-markdown-renderer';


const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem;
  background: white;
  border-radius: 3px;
  padding: 1.5rem 1rem 1rem;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Label = styled.span`
  font-size: .75rem;
  font-style: italic;
`;

const Name = styled(Line)`
  font-family: 'IM Fell Great Primer SC';
  font-size: 1.5rem;
`

const Notes = styled.div``


const ContactCard = ({name, location, faction, notes}) => {

  return (
    <Card>
      <Name>{name}<Label>Name</Label></Name>
      <Line>{location}<Label>Location</Label></Line>
      <Line>{faction}<Label>Affiliation</Label></Line>
      <Notes>
        <MarkdownRenderer markdown={notes} />
      </Notes>

    </Card>
  )
}

export default ContactCard;