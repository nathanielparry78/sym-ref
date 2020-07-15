import React from 'react';
import styled from 'styled-components';
import { Stats } from './stats';
import { ParsedAbilities } from './parsedAbilities';

const Heading = styled.h1`
	margin-top: .5rem;
	margin-bottom: 0;
`

const Number = styled.span`
	margin-left: .5rem;
	font-size: 1rem;
`

const Section = styled.div`
	padding: .5em;
	border-bottom: 1px solid #333;
	display: grid;
	text-align: left;
	grid-template-columns: 100px 1fr;

	&:nth-last-of-type(odd) {
		background: rgba(0, 0, 0, 0.1);
	}
`

const Quote = styled.div`
	font-size: 1.5rem;
	font-style: italic;
	border-bottom: 2px solid;
`

const Label = styled.span`
	font-weight: 700;
`

const StatBlock = styled(Section)`
	grid-template-columns: 100%;
	grid-column: span 2;
	width: 100%;
	padding: 0;
`;

const ToughBlock = styled(Section)`
	grid-template-columns: 100px 1fr 100px 1fr;
	width: 100%;
`;

export const Character = ({name, quote, number, manner, race, resistance, traits, stats, abilities, weapons, armor, defense, toughness, painThreshold, equipment, shadow, tactics}) => {

	return (
		<div>
			<Heading>
				{name}
				{number &&
					<Number>({number})</Number>
				}
			</Heading>
		{quote &&
			<Quote>"{quote}"</Quote>
		}
		<Section>
			<Label>Manner</Label>{manner}
		</Section>
		<Section>
			<Label>Race</Label>{race}
		</Section>
		<Section>
			<Label>Resistance</Label>{resistance}
		</Section>
		<Section>
			<Label>Traits</Label>
			<ParsedAbilities items={traits}/>
		</Section>
		<StatBlock>
			<Stats data={stats}/>
		</StatBlock>
		{abilities &&
			<Section>
				<Label>Abilities</Label>
				<ParsedAbilities items={abilities}/>
			</Section>
		}
		<Section>
			<Label>Weapons</Label>{weapons}
		</Section>
		<Section>
			<Label>Armor</Label>{armor}
		</Section>
		<Section>
			<Label>Defense</Label>{defense}
		</Section>
		<ToughBlock>
			<Label>Toughness</Label>
			<span>{toughness}</span>
			<Label>Pain Threshold</Label>
			<span>{painThreshold}</span>
		</ToughBlock>
		<Section>
			<Label>Equipment</Label>{equipment}
		</Section>
		<Section>
			<Label>Shadow</Label>{shadow}
		</Section>
		<Section>
			<Label>Tactics</Label>{tactics}
		</Section>

		</div>

	)



}