import Link from 'next/link'
import Card from '../components/card'
import styled from 'styled-components'

const H1 = styled.h1`
	font-family: 'IM Fell Great Primer SC', serif;
  font-size: 2rem;
`

const Input = styled.input`
  width: calc(100% - 1rem);
  padding: .25rem .5rem;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: 1px solid #666;


`

const Index = () => {

  const handleSubmit = (e) => {
    console.log(e.target)
  }

  return (
    <Card>
      <H1>Welcome!</H1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          label="Username"
          placeholder="Username"
        />
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
        />
        <button type="submit">Go</button>
      </form>

      <Link href="./auth">
        <a>Sign up</a>

      </Link>
    </Card>
  )
}

export default Index;