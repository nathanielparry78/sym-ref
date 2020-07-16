import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AbilityModal } from './abilityModal';
import dataFlat from '../public/symbaroum-data-flat.json';


const AbilityBlock = styled.div`
	padding-top: .5em;
	padding-bottom: 1em;
	border-bottom: 1px solid var(--lightBrown);
`

export const ParsedAbilities = ({items = []}) => {
	const [abilityList, setAbilityList] = useState([])
	const [completeList, setCompleteList] = useState([])

	useEffect(() => {
		const array = items.split('), ') || [];
		const abilityList = [];

		array.forEach(item => {
			const stat = item.split('(');
			const name = stat[0].trim();
			let tier = "";
			let notes = "";

			const parseTier = (value) => {
				if (value && value.toLowerCase() === "master" || value === "III") {
					tier = 3
				}	else if (value && value.toLowerCase() === "adept" || value === "II") {
					tier = 2
				}	else if (value && value.toLowerCase() === "novice" || value === "I") {
					tier = 1
				} else {
					notes = value
				}
			}

			if (name.toLowerCase().includes("ritualist")) {
				let ritualist = stat[1].split(", ");
				parseTier(ritualist[0])
			} else {
				const value = stat[1] && stat[1].replace(/[)]/g, '');
				parseTier(value)
			}

			abilityList.push({name: name, tier: tier, notes: notes});
		})

		return setAbilityList(abilityList)
	}, [])

	useEffect(() => {
		const completeList = abilityList.map(ability => {
			return dataFlat.filter(item =>
				item.name === ability.name
					&& (item.tier = ability.tier)
				)
		})

		setCompleteList(completeList.flat())

	}, [abilityList])

	return (
		<div>
			{completeList.map(item => (
				<AbilityBlock key={item.name}>
					<AbilityModal ability={item} tier={item.tier} type={item.type}/>
				</AbilityBlock>
			))}
		</div>
	)
}