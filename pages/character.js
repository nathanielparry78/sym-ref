import { useState, useEffect } from 'react';
import CharForm from '../components/charForm';
import CharSheet from '../pages/char-sheet';
import styled from 'styled-components';
import Button from '../components/button';
import { Simple, Flourish, BottomLine } from '../components/dividers';

import background from '../public/parchment-30.jpg'

const debounce = (fn, time) => {
	let timeout;

	return function() {
		const functionCall = () => fn.apply(this, arguments);
		clearTimeout(timeout);
		timeout = setTimeout(functionCall, time);
	};
};

const Section = styled.section`
  background: url(${background});
  padding: 2rem 2rem 1rem;
  border-radius: 15px;
  margin-bottom: .5rem;
  box-shadow: var(--shadowDark);
  position: relative;
`

const SubmitButton = styled(Button)`
  margin: 2rem auto;
  width: calc(100% - 2rem);
  display: block;
  position: relative;
`

const Character = () => {
  const [ character, setCharacter ] = useState({});
  const [ basics, setBasics ] = useState({});
  const [ stats, setStats ] = useState([]);
  const [ abilities, setAbilities ] = useState({});
  const [ storedCharacter, setStoredCharacter ] = useState(null);
  const [ submitted, setSumbitted ] = useState(false);

  useEffect(() => {
    const char = window.localStorage.getItem('character');

    char && setStoredCharacter(JSON.parse(char))
  }, [])


  const handleBasic = (e) => {
    setBasics({
      ...basics,
      [e.target.name]: e.target.value
    })
  }

  const handleStats = (e) => {
    const update = [...stats];

    if (e.target.value >= 0 && e.target.value < 20) {
      const { name, value } = e.target;

      const statName = name.includes('-')
        ? name.split('-')[0]
        : name

      const construct = (stat, value) => {
        let newStat = {}

        const getMod = (value) => (
          value > 10
            ? `-${value - 10}`
            : `+${10 - value}`
        )

        if (name.includes('-')) {
          newStat = {
            ...stat,
            name: statName,
            [name.includes('cur') ? "current" : "max"]: value,
          }
        } else {
          newStat = {
            name: statName,
            value: value,
            mod: getMod(value)
          }
        }

        return newStat;
      }

      const isPresent = stats.findIndex(item => item.name === statName)

      if (isPresent > -1) {
        update[isPresent] = construct(update[isPresent], value);
        setStats(update);
      } else {
        update.push(construct());
        setStats(update);
      }
    }
  }

  const handleAbilities = (e) => {
    setAbilities({
      ...abilities,
      [e.target.name]: e.target.value
    })
  }

  const submitBasic = () => {
    setCharacter({
      ...basics,
      ...character
    })
  }

  const submitStats = () => {
    setCharacter({
      stats,
      ...character
    })
  }
  const submitAbilities = () => {
    setCharacter({
      ...abilities,
      ...character
    })
  }

  const handleCharacterSave = () => {
    const string = character.name.replace(/\s/g, '')
    const name = `character-${string}`;

    window.localStorage.setItem('character', JSON.stringify(character));
    setSubmitted(true);
  }

  return (
    <>
      {(storedCharacter === null || storedCharacter === {} || storedCharacter === undefined) && !submitted
        ?
          (
            <Section>
              <CharForm
                handleBasic={handleBasic}
                handleStats={handleStats}
                handleAbilities={handleAbilities}
                submitBasic={submitBasic}
                submitStats={submitStats}
                submitAbilities={submitAbilities}
              />
              <BottomLine />
              <SubmitButton onClick={handleCharacterSave}>Submit character</SubmitButton>
            </Section>
          )
        : <CharSheet {...storedCharacter} />
      }
    </>
  )
}

export default Character;