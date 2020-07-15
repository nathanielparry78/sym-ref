import React from 'react';
import { Ability } from '../components/ability';

export default {
  title: 'Ability',
  component: Ability,
};

const data = {
	"id": 83,
	"type": "Ability",
	"name": "Agile Combat",
	"source": "APG",
	"requirement": "Iron Sworn",
	"effect": "During combat in wooded areas and hilly terrain the distance between opponents can shift quickly, from ranged to melee. The Iron Sworn have developed techniques for handling these rapid shifts between weapon types, and the most skilled among them can dance forth over the battlefield, seamlessly alternating between melee and ranged weapons and using every hostile attack for making counter-strikes. The character is trained in the Iron Sworns’ advanced techniques on how to emerge victorious from skirmishes.",
	"novice": {
		"type": "Passive",
		"text": "The character can split his or her movement and perform one part of the movement action before the combat action, and the other part after. This is done in order to make maximum use of the terrain and cover. The character still suffers Free Attacks from enemies if the movement leads into or through melee combat distance."
	},
	"adept": {
		"type": "Passive",
		"text": "As a part of its combat action, the character may freely switch between weapons. This only pertains to changing weapons; it does not provide an extra action to be used for anything else.\r\nFor instance, the Iron Sworn may start holding two weapons, move a part of its movement range, and as a combat action switch to a bow, fire it, and then switch back to two weapons. Finally, the rest of the movement is made."
	},
	"master": {
		"type": "Reaction",
		"text": "The character gains a second chance to pass all Defense tests against Free Attacks provoked by withdrawing from melee. In addition, every such Free Attack against the character lets the Iron Sworn make their own Free Attack against the enemy. The character may freely switch weapons for these counter-strikes and choose the tool that fits the situation best."
	}
}


export const Novice = () => (
	<Ability {...data} tier={1} />
);

export const Adept = () => (
	<Ability {...data} tier={2} />
);

export const Master = () => (
	<Ability {...data} tier={3} />
);