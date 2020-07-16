import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Ability } from '../components/ability';
import flatAbilities from '../public/symbaroum-data-flat.json';
import background from "../public/parchment-30.jpg";


const StyledForm = styled.form`
  position: relative;
  display: block;
`

const StyledInput = styled.input`
  padding: .5em;
  font-size: 18px;
  width: 60%;
  display: block;
  margin: 0 auto;
  background: #eaf0f9;
  text-align: center;
  margin-bottom: 2rem;
`

const SuggestList = styled.ul`
  padding-left: 0;
  background: #eaf0f9;
  margin: 1px auto;
  position: absolute;
  top: 46px;
  left: 20%;
  width: 60%;
  box-shadow: 3px 3px 3px #222;
  z-index: 10;
`

const SuggestItem = styled.li`
  list-style: none;
  line-height: 1.5;
  padding: .25em 1em;
  user-select: none;

  &:hover {
    outline: 1px solid var(--blue);
  }
`

const AbilityBlock = styled.div`
  background: url(${background});
  padding: 1.25em 1.5em 1.25em ;
  position: relative;
  border-radius: 5px;
  box-shadow: var(--shadow);
  z-index: 5;
  width: 80vw;
  margin: 1rem auto;
`

const GarbageCan = styled.span`
  position: absolute;
  top: 2.5rem;
  right: 1.5rem;
  color: maroon;
  font-size: .75em;
  cursor: pointer;
`

const Abilities = ({className}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [collection, setCollection] = useState([]);

  const inputRef = useRef(null);

  useEffect(() => {
    const abilityCollection = window.localStorage.getItem('abilityCollection')

    if (abilityCollection) {
      setCollection(JSON.parse(window.localStorage.getItem('abilityCollection')))
    }
  }, [])

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
    const newCollection = [item, ...collection]
    setCollection(newCollection);
    setQuery("");
    inputRef.current.value = "";
    window.localStorage.setItem("abilityCollection", JSON.stringify(newCollection))
  };

  const handleRemove = (id) => {
    const newCollection = collection.filter( item => item.id !== id);
    setCollection(newCollection);
    window.localStorage.setItem("abilityCollection", JSON.stringify(newCollection))
  };

  return (
    <div>
      <StyledForm className={className}>
        <StyledInput onChange={handleInputChange} ref={inputRef} placeholder="Search for an ability . . ."/>
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
            <GarbageCan onClick={() => handleRemove(ability.id)}>delete</GarbageCan>
          </AbilityBlock>
        )
      })}

    </div>
  )
}

export default Abilities;