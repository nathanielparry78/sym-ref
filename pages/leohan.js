import CharSheet from "./char-sheet";

const character = {
  abilities: "Armored Mystic (adept), Beast Lore (novice), Berserker (novice), Equestrian (adept), Iron Fist (master), Man-at-arms (master), Steadfast (master), Two-handed Force (adept), Witch Hammer (master), Code of Honor (I)",
derived: {
composure: {current: "10", max: "10"},
corruption: {current: "0", max: "0"},
toughness: {current: "15", max: "15"}
},
name: "Leohan Mekele",
occupation: "Templar",
race: "Ambrian",
stats: [
  {name: "accurate", value: "10", mod: "+0"},
  {name: "cunning", value: "9", mod: "+1"},
  {name: "discreet", value: "5", mod: "+5"},
  {name: "persuasive", value: "10", mod: "+0"},
  {name: "quick", value: "13", mod: "-3"},
  {name: "resolute", value: "11", mod: "-1"},
  {name: "strong", value: "15", mod: "-5"},
  {name: "vigilant", value: "7", mod: "+3"}
],
  totalXP: "10",
  unspentXP: "10",
  gear: {
    weapons: "Bastard Sword [1d8] (precise), +3 if Berserker, +3 against Abominations/Undead",
    armor: "Templar Full Plate [1d8 + 1d4] (holy)"
  },
  defense: "3, +5 if Berserker",
  painThreshold: "8",
  notes: "The Brothers Mekele fight in a controlled rage and move together to avoid being flanked. Only if the battle is tough do they enter the berserker rage and go on full attack."
}

const Leohan = () => (
  <CharSheet {...character} />
)

export default Leohan;