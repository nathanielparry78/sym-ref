import styled from 'styled-components';

const H1 = styled.h1`
  font-family: var(--fancy);
  color: var(--black);
  position: relative;

  &::after {
		content: "";
		border-bottom: 3px solid var(--lightBrown);
		width: 100%;
		height: 1px;
		top: 40px;
		position: absolute;
		display: block;
	}
`

const Heading = ({children}) => <H1>{children}</H1>

export default Heading;