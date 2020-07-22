import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '../components/card';
import Button from '../components/button';
import styled from 'styled-components';
import Heading from '../components/heading';

const P = styled.p`
  font-size: 1.25rem;
  margin-top: 0;
`

const Name = styled.span``

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: 1rem 0;
  align-items: center;
  justify-items: space-between;

  & span {
    width: auto;
    display: block;
  }
`

const DeleteCharacter = () => {
  const [ hasCharacter, setHasCharacter ] = useState(false);
  const [ charName, setCharName ] = useState('')

  useEffect(() => {
    const char = window.localStorage.getItem('character');

    if (char) {
      const parsed = JSON.parse(char);
      setCharName(parsed.name);
      setHasCharacter(true)
    }
  }, [])

  const handleDelete = () => {
    console.log("clicky");
    window.localStorage.removeItem('character');
  }

  return (
    <Card>
      { hasCharacter
        ? <>
            <Heading>Delete your character?</Heading>
            <P>
              Do you want to permanently delete your character <Name>{charName}</Name> from this device? You're not an idiot... I don't need to explain what "permanently" means.
            </P>
            <ButtonWrapper>
              <Link href="../character">
                <a>
                  <Button color={"var(--blue)"}>Never mind.</Button>
                </a>
              </Link>
              <Button onClick={handleDelete}>YES! WIPE IT!</Button>
            </ButtonWrapper>
          </>
        : <>
            <Heading>Add a character?</Heading>
            <P>
              Hit the button to track a new character. You can only have one character at this time, and it is saved on the device it was created on.
            </P>
            <P>
              Note that this is a character <strong>tracker</strong>, not a character creator. You will need the appropriate <a href="https://frialigan.se/en/games/symbaroum/">rule books</a> in order to actually create a character.
            </P>
            <ButtonWrapper>
              <Link href="../abilities">
                <a>
                  <Button color={"var(--blue)"}>Nah. I'm just looking.</Button>
                </a>
              </Link>

              <Link href="../character">
                <a>
                  <Button>YES! Take me there.</Button>
                </a>
              </Link>
            </ButtonWrapper>
          </>
      }

    </Card>
  )

}

export default DeleteCharacter;