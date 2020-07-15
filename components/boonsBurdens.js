import React from 'react';
import {boons, burdens} from '../public/symbaroum-data.json';
import styled from 'styled-components';

const H1 = styled.h1`
 @import url('https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer+SC&display=swap');
	font-family: 'IM Fell Great Primer SC', serif;
	margin-bottom: 0;
	padding: 0;
	font-size: 24px;
`;

const List = styled.ul`
	padding-left: 0;
	font-size: 12px;
`;

const Item = styled.li`
	list-style: none;
	margin: 0;
	padding: .25rem .5rem;
	display: grid;
	grid-template-columns: 150px 1fr;
	border-bottom: 1px solid #968061;

	&:nth-of-type(odd) {
		background: #E9E3D8;
	}
`;

const Header = styled(Item)`
		font-family: serif;
		color: white;
		background: black !important;
`;


export const BoonsBurdens = ({list, title}) => {

	return (
		<>
			<H1>{title}</H1>
			<List>
				<Header>
					<span>{title.toUpperCase()}</span>
					<span>DESCRIPTION</span>
				</Header>
				{list.map(boon => (
					<Item>
						<span>{boon.name}</span>
						<span>{boon.effect.split(". ")[0]}.</span>
					</Item>
				))}
			</List>
		</>
	)
}