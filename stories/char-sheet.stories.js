import React from 'react';
import CharSheet from '../pages/char-sheet';

export default {
  title: 'Character Sheet',
  component: CharSheet,
};


const baumelo = {
	name: "Baumelo",
	occupation: "Witch Hunter",
	totalXP: 45,
	unspentXP: 3,
	quote: "Hand me the skull.",
	manner: "Points at whom he is speaking to",
	race: "Human (Ambrian)",
	resistance: "Ordinary",
	traits: "Contacts (I), Addiction (I)",
	stats: [
		{
			name: "Accurate",
			value: 7,
			mod: +3
		},
		{
			name: "Cunning",
			value: 11,
			mod: -1
		},
		{
			name: "Discreet",
			value: 10,
			mod: 0
		},
		{
			name: "Persuasive",
			value: 15,
			mod: -5
		},
		{
			name: "Quick",
			value: 9,
			mod: -1
		},
		{
			name: "Resolute",
			value: 13,
			mod: -3
		},
		{
			name: "Strong",
			value: 5,
			mod: +5
		},
		{
			name: "Vigilant",
			value: 10,
			mod: 0
		}
	],
	abilities: "Curse (III), Leader (novice), Ritualist (adept), Heretic's Trail(I), Exchange Shadow(I), Alternative Damage (II)",
	weapons: "Sword 4",
	armor: "Scale mail 3 (impeding)",
	defense: "+3 (shield)",
	toughness: {
		current: 8,
		max: 15
	},
	corruption: {
		current: 1,
		max: 10
	},
	composure: {
		current: 10,
		max: 10
	},
	painThreshold: "3",
	equipment: "3 doses Pixie Dust (new elixir), shackles and chains, interrogation tools, 12 thaler",
	shadow: "Baumelo/Odako has performed the ritual Exchange Shadow, and uses Terr’s lightly tainted shadow as his own: pale red with flaky segments (corruption: 4)",
	tactics: "The cult leader is only after the King’s skull – all else is subordinate."
}




// export const Henchmen = () => (
// 	<CharSheet {...baumelosHenchmen} />
// );

// export const Gerek = () => (
// 	<CharSheet {...gerek} />
// );

// export const Alahara = () => (
// 	<CharSheet {...alahara} />
// );

// export const Gorak = () => (
// 	<CharSheet {...gorak} />
// );

export const Baumelo = () => (
	<CharSheet {...baumelo} />
);

// export const Terr = () => (
// 	<CharSheet {...terr} />
// );

// export const One = () => (
// 	<Character {...godrai} />
// );