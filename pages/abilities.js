import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Ability} from '../components/ability';
import flatAbilities from '../public/symbaroum-data-flat.json';

const StyledForm = styled.form`
  position: relative;
  display: block;
`

const StyledInput = styled.input`
  padding: .5em;
  font-size: 18px;
  width: calc(100% - 1em);
  display: block;
`

const SuggestList = styled.ul`
  padding-left: 0;
  background: #ffffff;
  margin: 1px;
  position: absolute;
  width: calc(100vw - 2rem);
  box-shadow: 3px 3px 3px #222;
  z-index: 10;
`

const SuggestItem = styled.li`
  list-style: none;
  line-height: 1.5;
  padding: .25em 1em;

  &:hover {
    outline: 1px solid #067df7;
  }
`

const AbilityBlock = styled.div`
  background: white;
  margin: .5em;
  padding: .5em 1em 1.25em ;
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 4px 6px 2px #212121;;
  z-index: 5;
`

const GarbageCan = styled.span`
  position: absolute;
  top: .75rem;
  right: 1rem;
  color: red;
  font-size: .75em;
  cursor: pointer;
`

const Abilities = ({className}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [collection, setCollection] = useState([]);

  const inputRef = useRef(null);


  const handleInputChange = (e) => {
    if (e.target.value.length > 1) {
      setQuery(e.target.value)
    } else {
      setQuery("")
    }
  }

  useEffect(() => {
    if (query.length > 1) {
      const result = flatAbilities.filter(item => item.name.toLowerCase().includes(query.toLowerCase()) )
      setResults(result)
    } else {
      setResults([])
    }
  }, [query])


  const handleSuggestClick = (item) => {
    setCollection([item, ...collection]);
    setQuery("");
    inputRef.current.value = "";
  };

  const handleRemove = () => {

  };

  return (
    <div>
      <StyledForm className={className}>
        <StyledInput onChange={handleInputChange} ref={inputRef}/>
        {results.length > 0 &&
          <SuggestList>
            {results.slice(0, 9).map((item, i) =>
              <SuggestItem key={i} onClick={() => handleSuggestClick(item)}>{item.name}</SuggestItem>
            )}
          </SuggestList>
        }
      </StyledForm>

      {collection.length > 0 && collection.map(ability => {
        let tier = ""
        switch(ability.type) {
          case "Ability":
          case "Monstrous Trait":
          case "Mystical Power":
            tier = 3;
            break;
          default:
            tier = 1
        }

        return (
          <AbilityBlock key={ability.id}>
            <Ability tier={tier} {...ability} />
            <GarbageCan onClick={handleRemove}>delete</GarbageCan>
          </AbilityBlock>
        )
      })}

    </div>
  )
}

export default Abilities;