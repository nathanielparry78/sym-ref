import React from 'react';
import { Character } from '../components/character';

export default {
  title: 'Character',
  component: Character,
};

const baumelosHenchmen = {
	name: "Baumelo’s henchmen",
	number: "PCs + 1",
	quote: "Give us the heretic!",
	manner: "Grinds their fists",
	race: "Ambrian",
	resistance: "Weak",
	traits: "Bushcraft (I)",
	stats: "Accurate 13 (−3), Cunning 7 (+3), Discreet 5 (+5), Persuasive 9 (+1), Quick 10 (0), Resolute 11 (−1), Strong 15 (−5), Vigilant 10 (0)",
	abilities: "",
	weapons: "Axe 4",
	armor: "Scale mail 3 (impeding)",
	defense: "+2 (shield)",
	toughness: "15",
	painThreshold: "8",
	equipment: "1D10 shilling, a pouch of Black Root for chewing",
	shadow: "Gray and black-speckled, like sooty wadmal (corruption: 4)",
	tactics: "The henchmen attack one character each, except for the strongest looking character who gets two opponents to handle."
}

const gerek = {
	name: "Gerek, undead",
	quote: "Oooooouuuuurghhh ...",
	manner: "Klicks his teeth",
	race: "Undead",
	resistance: "Ordinary",
	traits: "Armored (II)",
	stats: "Accurate 9 (+1), Cunning 7 (+3), Discreet 10 (0), Persuasive 5 (+5), Quick 10 (0), Resolute 13 (−3), Strong 15 (−5), Vigilant 11 (−1)",
	abilities: "Iron Fist (adept), Twin Attack (novice)",
	weapons: "Crowbar 5, Chain with hook 5",
	armor: "Leather harness 4 (Impeding)",
	defense: "+2",
	toughness: "15",
	painThreshold: "8",
	equipment: "None",
	shadow: "Deeply black, like a mere in dark- ness (thoroughly corrupt)",
	tactics: "Gerek attacks the closest intruder."
}

const alahara = {
	name: "Alahara, the Flayer",
	quote: "Nothing shall come between me and my love",
	manner: "Speaks with clenched teeth",
	race: "Changeling",
	resistance: "Ordinary",
	traits: "Shapeshifting (adept)",
	stats: "Accurate 10 (0), Cunning 11 (−1), Discreet 15 (−5), Persuasive 5 (+5), Quick 13 (−3), Resolute 9 (+1), Strong 7 (+3), Vigilant 10 (0)",
	abilities: "Ritualist (novice), Strangler (novice), Twin Attack (novice), Blood Shrouding (novice)",
	weapons: "Two swords 4",
	armor: "None",
	defense: "-4",
	toughness: "10",
	painThreshold: "5",
	equipment: "7 thaler, Ritual books (Blood Shrouding and Break Link)",
	shadow: "Black with scattered lights, like a cold and clear night sky (corruption: 3)",
	tactics: "Alahara uses his Shapeshifting trait when attacking the characters; to him Gorak’s survival is all that matters. When Gorak finally transforms, Alahara stops fighting and walks weeping into certain death at the claws of his lost love."
}

const gorak = {
	name: "Gorak, blight-born",
	number: "",
	quote: "I can’t stand this any looonGEEEAAARRR !",
	manner: "Flailing, raging",
	race: "Abomination",
	resistance: "Challenging",
	traits: "Armored (I), Natural weapon (I), Robust (I)",
	stats: "Accurate 13 (−3), Cunning 9 (+1), Discreet 7 (+3), Persuasive 5 (+5), Quick 10 (0), Resolute 11 (−1), Strong 15 (−5), Vigilant 10 (0)",
	abilities: "Berserker (master), Natural Warrior (master), Man-at-arms (novice)",
	weapons: "Claws 12/10 (short), two attacks on the same target",
	armor: "Tough flesh 6",
	defense: "+2",
	toughness: "15",
	painThreshold: "8",
	equipment: "None",
	shadow: "A pulsating blackness, like boiling tar below a thin membrane that bursts as he transforms (thoroughly corrupt)",
	tactics: "The abomination breaks his bonds and attacks a random person. Alahara is also at risk."
}

const baumelo = {
	name: "Baumelo, False Witch Hunter",
	number: "",
	quote: "Hand me the skull.",
	manner: "Points at whom he is speaking to",
	race: "Human (Ambrian)",
	resistance: "Ordinary",
	traits: "Contacts (cultists)",
	stats: "Accurate 7 (+3), Cunning 11 (−1), Discreet 10 (0), Persuasive 15 (−5), Quick 9 (+1), Resolute 13 (−3), Strong 5 (+5), Vigilant 10 (0)",
	abilities: "Curse (novice), Leader (novice), Ritualist (adept), Heretic's Trail(I), Exchange Shadow(I)",
	weapons: "Sword 4",
	armor: "Scale mail 3 (impeding)",
	defense: "+3 (shield)",
	toughness: "10",
	painThreshold: "3",
	equipment: "3 doses Pixie Dust (new elixir), shackles and chains, interrogation tools, 12 thaler",
	shadow: "Baumelo/Odako has performed the ritual Exchange Shadow, and uses Terr’s lightly tainted shadow as his own: pale red with flaky segments (corruption: 4)",
	tactics: "The cult leader is only after the King’s skull – all else is subordinate."
}

const terr = {
	name: "Terr, psychic",
	number: "",
	quote: "I am not to blame.",
	manner: "Stutters, huddles",
	race: "Human (Ambrian)",
	resistance: "Weak",
	traits: "Bushcraft(I)",
	stats: "Accurate 10 (0), Cunning 11 (−1), Discreet 10 (0), Persuasive 5 (+5), Quick 9 (+1), Resolute 13 (−3), Strong 7 (+3), Vigilant 15 (−5)",
	abilities: "Witchcraft (novice)",
	weapons: "Unarmed 2",
	armor: "None",
	defense: "+1",
	toughness: "10",
	painThreshold: "4",
	equipment: "None",
	shadow: "Terr appears to be gravely corrupted (warm blackness like the inside of a velvet cape (corruption: 6); since Baumelo/ Odako has given his shadow to the boy, using Exchange Shadow",
	tactics: "Terr will not fight, except in self-defense."
}

// const godrai = {
// 	name: "",
//	number: "",
// 	quote: "",
// 	manner: "",
// 	race: "",
// 	resistance: "",
// 	traits: "",
// 	stats: "",
// 	abilities: "",
// 	weapons: "",
// 	armor: "",
// 	defense: "",
// 	toughness: "",
// 	painThreshold: "",
// 	equipment: "",
// 	shadow: "",
// 	tactics: ""
// }



export const Henchmen = () => (
	<Character {...baumelosHenchmen} />
);

export const Gerek = () => (
	<Character {...gerek} />
);

export const Alahara = () => (
	<Character {...alahara} />
);

export const Gorak = () => (
	<Character {...gorak} />
);

export const Baumelo = () => (
	<Character {...baumelo} />
);

export const Terr = () => (
	<Character {...terr} />
);

// export const One = () => (
// 	<Character {...godrai} />
// );