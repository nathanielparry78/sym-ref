import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StatContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`;

const Block = styled.div`
	display: grid;
	min-width: 65px;
	border: 1px solid;
`

const Stat = styled.div`
	text-align: center;
	font-size: .75rem;
	border-bottom: 1px solid;
`;

const ValueBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const Value = styled.span`
	font-size: 1.25rem;
	opacity: 0.6;
`;

const Mod = styled.span``;

export const StatBlock = ({stat, value, mod}) => (
	<Block>
		<Stat>{stat}</Stat>
		<ValueBlock>
			<Value>{value}</Value>
			<Mod>{mod}</Mod>
		</ValueBlock>
	</Block>
);



export const Stats = ({data}) => {
	const [stats, setStats] = useState();

	useEffect(() => {
		const statArray = data.split(', ');
		const statList = [];

		statArray.map(item => {
			const stat = item.split(' ');
			const statName = stat[0];
			const statValue = stat[1];
			const statMod = stat[2];

			statList.push({"stat": statName, "value": statValue, "mod": statMod});
		})

		return setStats(statList)
	}, [])

	return (
		<StatContainer>
			{stats && stats.map(item =>
				<StatBlock {...item} key={item.stat}/>
			)}
		</StatContainer>
	)
 }