import React from 'react';
import { ParsedAbilities } from '../components/parsedAbilities';

export default {
  title: 'Parsed Abilities',
  component: ParsedAbilities,
};

const data = "Berserker (master), Natural Warrior (adept), Man-at-arms (novice)";

const data2 = "Ritualist (novice, Blood Shrouding, Exchange Shadow, Heretic’s Trail), Strangler  (master), Twin Attack (novice)";

const data3 = "Gravely Cold (III), Manifestation (II), Natural Weapon (III), Slow (see page 39), Spirit Form (I)";

const data4 = "Curse (novice), Leader (novice), Ritualist (adept, Exchange Shadow, Heretic’s Trail)";

const traits = "Fleet-footed (I), Natural Weapon (II), Armored (III), Poisonous (III), Poison Spit (III), Web (III)";


export const One = () => (
	<ParsedAbilities items={data} />
);

export const Two = () => (
	<ParsedAbilities items={data2} />
);

export const Three = () => (
	<ParsedAbilities items={data3} />
);

export const Four = () => (
	<ParsedAbilities items={traits} />
);
