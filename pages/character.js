import { useState, useEffect } from 'react';
import CharForm from '../components/charForm';
import CharSheet from '../pages/char-sheet';
import styled from 'styled-components';
import Button from '../components/button';
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

const SubmitButton = styled(Button)`
  margin: 2rem auto;
  display: block;
  position: relative;
`

const Character = () => {
  const [ character, setCharacter ] = useState({});
  const [ basics, setBasics ] = useState({});
  const [ stats, setStats ] = useState([]);
  const [ abilities, setAbilities ] = useState({});
  const [ storedCharacter, setStoredCharacter ] = useState(null);

  useEffect(() => {
    const char = window.localStorage.getItem('character');
    console.log(char)

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

    if (e.target.value > 0 && e.target.value < 18) {
      const { name, value } = e.target;
      let stat = {}

      const statName = name.includes('-')
        ? name.split('-')[0]
        : name


      // if toughness, corruption, composure
      // add current/max.

      // update storage on tracker modification

      const isPresent = stats.findIndex(item => item.name === statName)


      if (name.includes('-')) {
        stat = {
          name: statName,
          current: name.includes('cur') && value,
          max: name.includes('max') && value,
        }

      } else {
        stat = {
          name: statName,
          value: value
        }
      }


      if (isPresent > -1) {
        update[isPresent] = stat
        setStats(update)
      } else {
        update.push(stat)
        setStats(update)
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

    window.localStorage.setItem('character', JSON.stringify(character))
  }

  console.log(stats)
  return (
    <>
      {(storedCharacter === null || storedCharacter === {} || storedCharacter === undefined)
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