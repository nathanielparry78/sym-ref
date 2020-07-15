import React from 'react';
import { Character } from '../components/character';

export default {
  title: 'Character',
  component: Character,
};

const xanatha = {
	name: "The White Spider Xanathâ",
	quote: "The threads of fate tremble as I weave the future.",
	manner: "Hisses, stands absolutely still",
	race: "Spider",
	resistance: "Strong",
	traits: "Fleet-footed (I), Natural Weapon (II), Armored (III), Poisonous (III), Poison Spit (III), Web (III)",
	stats: "Accurate 10 (0), Cunning 17 (−7), Discreet 11 (−1), Persuasive 5 (+5), Quick 13 (−3), Resolute 7 (+3), Strong 9 (+1), Vigilant 10 (0)",
	abilities: "Acrobatics (novice), Exceptional Attribute (adept)",
	weapons: "Bite 4 (+ poison 4 for 4 turns)",
	armor: "Chitin shields 4",
	defense: "−3",
	toughness: "10",
	painThreshold: "5",
	equipment: "None",
	shadow: "Radiant with blinding light (corruption: 0)",
	tactics: "Xanathâ is sly and plans many steps ahead. Her goal is to claim the Vile Water. If she has to fight, she uses her almost living webs to catch her enemies and then she attacks them with poisonous spit. If that is not enough she will fall back and alter her strategy. She only uses her bite as a last resort, if she gets backed into a corner."
}

const keler = {
	name: "Keler, Second-rate thief",
	quote: "Please let me go, I will never steal again!",
	manner: "Shifty eyes, stutters",
	race: "Human (Ambrian)",
	resistance: "Weak",
	traits: "Contacts(I)",
	stats: "Accurate 10 (0), Cunning 13 (−3), Discreet 11 (−1), Persuasive 7 (+3), Quick 10 (0), Resolute 5 (+5), Strong 9 (+1), Vigilant 15 (−5)",
	abilities: "",
	weapons: "Crossbow 5, Dagger 3 (short)",
	armor: "Leather cuirass 2 (Impeding)",
	defense: "+2",
	toughness: "10",
	painThreshold: "5",
	equipment: "The Sun Stone, 3 thaler, lucky charm (dysfunctional), 12 bolts in a quiver",
	shadow: "Darkened silver (corruption: 0)",
	tactics: "Keler fires his crossbow and pulls his dagger if backed into a corner. But as soon as it is evident that he will get hurt, he throws his weapons away and pleads for his life."
}

const malRogan = {
	name: "Zombie King Omega",
	quote: "RAWR!!!",
	manner: "Speaks in a croaking voice, tilting his head back and forth",
	race: "Undead",
	resistance: "Challenging",
	traits: "Long-lived(I), Undead (I)",
	stats: "Accurate 7 (+3), Cunning 5 (+5), Discreet 9 (+1), Persuasive 10 (0), Quick 11 (−1), Resolute 13 (−3), Strong 17 (−7), Vigilant 10 (0)",
	abilities: "Curse (master), Exceptional Attribute [Strong] (adept), Iron Fist (adept)",
	weapons: "Spiked club 6",
	armor: "Fortified chainmail 4 (Impeding)",
	defense: "+3",
	toughness: "15",
	painThreshold: "-",
	equipment: "His own mummified hand in a rusty chain around the neck (artifact, see page 23), 4 thaler",
	shadow: "Black as tar (corruption: thoroughly corrupt)",
	tactics: "Rogan lets his followers attack first, while he puts a curse on what he believes to be the toughest enemy. When the curse has taken effect he moves in with his spiked club."
}

const robbers = {
	name: "Robbers",
	number: "as many as the PCs",
	quote: "Your money or your... or you die!",
	manner: "Stares with misty eyes",
	race: "Human (Ambrian)",
	resistance: "Weak",
	traits: "Bushcraft(I)",
	stats: "Accurate 13 (−3), Cunning 10 (0), Discreet 15 (−5), Persuasive 7 (+3), Quick 10 (0), Resolute 5 (+5), Strong 9 (+1), Vigilant 11 (−1)",
	abilities: "",
	weapons: "Crossbow 5, Spear 4 (long)",
	armor: "Leather cuirass 2 (Impeding)",
	defense: "+2",
	toughness: "10",
	painThreshold: "5",
	equipment: "5 shillings, card deck or dice set, chewing tobacco, 6 bolts in a quiver",
	shadow: "Rusty iron (corruption: 2)",
	tactics: "The robbers fire a salvo with their cross- bows before attacking with spears. They try to stay alive while Mal-Rogan kills the enemies one by one."
}

const keriLas = {
	name: "Hunger Wolf, the elf scout Keri-Las in her wolf shape",
	quote: "",
	manner: "Growls with bared teeth, then tries to attack Ludo and Belun",
	race: "Elf (Summer elf)",
	resistance: "Ordinary",
	traits: "Armored (I), Natural Weapon (I)",
	stats: "Accurate 10 (0), Cunning 7 (+3), Discreet 5 (+5), Persuasive 9 (+1), Quick 15 (−5), Resolute 13 (−3), Strong 11 (−1), Vigilant 10 (0)",
	abilities: "Acrobatics (novice), Natural Warrior (novice), Shapeshift (adept)",
	weapons: "Bite 4 (short)",
	armor: "Wolf hide 2 (flexible)",
	defense: "-5",
	toughness: "11",
	painThreshold: "6",
	equipment: "An arm bracelet of rusted iron, 6 shillings",
	shadow: "Blood red with a slightly coagula- ted rim (corruption: 3)",
	tactics: "Keri-Las tries to get to the barbarian scouts and will kill them if she cannot catch them alive. She tries not to kill others (like the player characters), but will hurt them if they stand in her way."
}

const jakkar = {
	name: "Jakkar",
	number: "as many as the PCs",
	quote: "",
	manner: "The jakaar is a canine pack animal, as prone to capture its own prey as it is to eat from cadavers left by other beats. The pack following Keri-Las takes the chance of attacking together with the hunger wolf.",
	race: "Beast",
	resistance: "Weak",
	traits: "Armored (I), Natural Weapon (I)",
	stats: "Accurate 13 (−3), Cunning 7 (+3), Discreet 11 (−1), Persuasive 5 (+5), Quick 15 (−5), Resolute 9 (+1), Strong 10 (0), Vigilant 10 (0)",
	abilities: "",
	weapons: "Bite 3 (short)",
	armor: "Wolf hide 2 (flexible)",
	defense: "-5",
	toughness: "10",
	painThreshold: "5",
	equipment: "None",
	shadow: "Green like spring grass (corruption: 0)",
	tactics: "The jakaars trail the hunger wolf and attack one opponent each (or the pathfinders if the PCs take on the hunger wolf)."
}

const belun = {
	name: "Belun, blight born",
	quote: "I feel fine ... no ... no, nooooooo ...",
	manner: "First trembling with fear, then trembling from the dark power that surges through him",
	race: "Abomination (Blight born)",
	resistance: "Challenging",
	traits: "Armored (I), Natural Weapon (I), Robust (I)",
	stats: "Accurate 13 (−3), Cunning 9 (+1),	Discreet 7 (+3), Persuasive 5 (+5), Quick 10 (0), Resolute 11 (−1), Strong 15 (−5), Vigilant 10 (0)",
	abilities: "Berserker (master), Natural Warrior (master), Man-at-Arms (novice)",
	weapons: "Claws 12/10 (short), two attacks at the same target",
	armor: "Tough flesh 5",
	defense: "+2",
	toughness: "15",
	painThreshold: "8",
	equipment: "None",
	shadow: "Oozing black (thoroughly corrupt)",
	tactics: "The abomination that once was Belun attacks the target which is biggest, closest or did the most damage during the previous turn. It never tries to defend itself and ignores the risk of being hit by free attacks if passing enemies on the way towards a particular target."
}

const ludo = {
	name: "Ludo, pathfinder",
	quote: "I am not sick, I barely touched the skull, I promise!",
	manner: "Blinking eyes, quavering voice",
	race: "Human (barbarian)",
	resistance: "Human (barbarian)",
	traits: "Bushcraft (I)",
	stats: "Accurate 10 (0), Cunning 9 (+1), Discreet 7 (+3), Persuasive 5 (+5), Quick 13 (−3), Resolute 10 (0), Strong 11 (−1), Vigilant 15 (−5)",
	abilities: "",
	weapons: "Bow 4, Axe 4",
	armor: "Leather armor 2 (Impeding)",
	defense: "−2 (shield)",
	toughness: "11",
	painThreshold: "6",
	equipment: "None",
	shadow: "Moldy green with spots of grow- ing darkness (corruption: 9)",
	tactics: "Ludo wants to survive and will do his utmost in the fight against the PCs."
}

const godrai = {
	name: "Godrai, elf of late summer",
	quote: "Give us what we want and you are free to go.",
	manner: "Lordly stature, stern expression",
	race: "Elf (summer elf)",
	resistance: "Challenging",
	traits: "Long-lived (I)",
	stats: "Accurate 15 (−5), Cunning 11 (−1), Discreet 9 (+1), Persuasive 10 (0), Quick 13 (−3), Resolute 10 (0), Strong 5 (+5), Vigilant 7 (+3)",
	abilities: "Acrobatics (master), Alchemy (novice), Marksman (adept), Poisoner (adept), Quick Draw (novice), Ritualist (novice, Turn Weather)",
	weapons: "Bow 5, Sword 4, both with poison (damage 3 for 3 turns)",
	armor: "Lacquered Silk Cuirass 3 (Flexible)",
	defense: "-2",
	toughness: "10",
	painThreshold: "3",
	equipment: "Two quivers with 12 arrows in each (the arrows in one of them are coated with weak poison), headband of rusty iron",
	shadow: "Bluish red (corruption: 1)",
	tactics: "Godrai will shoot poisoned arrows at enemies with ranged weapons and use movement and acrobatics to stay out of melee."
}

const saranRi = {
	name: "Saran-Ri, elf of early summer",
	quote: "It always ends this way, with your blood on the ground.",
	manner: "Wary and alert",
	race: "Elf (summer)",
	resistance: "Ordinary",
	traits: "Long-lived (I).	As beamon:	Armored (I), Natural weapon (I)",
	stats: "Accurate 13 (− 3), Cunning 7 (+3), Discreet 5 (+5), Persuasive 9 (+1), Quick 11 (−1), Resolute 10 (0), Strong 15 (−5), Vigilant 10 (0)",
	abilities: "Iron Fist (novice), Natural Warrior (novice), Shapeshift (adept)",
	weapons: "Claws 3 (short)",
	armor: "Bear skin 2 (flexible)",
	defense: "-1",
	toughness: "15",
	painThreshold: "8",
	equipment: "Ring of rusty iron",
	shadow: "Burning red with dancing flakes of soot (corruption: 3)",
	tactics: "Saran-Ri will try to beat down the stron- gest melee opponent first, then the rest of the melee fighters before moving on to mystics and marksmen."
}

// const godrai = {
// 	name: "",
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



// export const One = () => (
// 	<Character {...xanatha} />
// );

export const Keler = () => (
	<Character {...keler} />
);

export const MalRogan = () => (
	<Character {...malRogan} />
);

export const Robbers = () => (
	<Character {...robbers} />
);

export const KeriLas = () => (
	<Character {...keriLas} />
);

export const Jakkar = () => (
	<Character {...jakkar} />
);

export const Belun = () => (
	<Character {...belun} />
);

export const Ludo = () => (
	<Character {...ludo} />
);

export const Godrai = () => (
	<Character {...godrai} />
);

export const SaranRi = () => (
	<Character {...saranRi} />
);