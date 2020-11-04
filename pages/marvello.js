import CharSheet from "./char-sheet";

const character = {
  abilities: "Rapid Fire (adept), Iron Fist (master), Man-at-Arms (adept), Marksman (master), Recovery (novice), Twin Attack (adept), Commanding Voice (I)",
  derived: {
    composure: {current: "8", max: "8"},
    corruption: {current: "0", max: "0"},
    toughness: {current: "10", max: "10"}
  },
  name: "Captain Marvello",
  occupation: "Guard Captain",
  race: "Ambrian",
  stats: [
    {name: "accurate", value: "15", mod: "-5"},
    {name: "cunning", value: "7", mod: "+3"},
    {name: "discreet", value: "9", mod: "+1"},
    {name: "persuasive", value: "11", mod: "-1"},
    {name: "quick", value: "13", mod: "-3"},
    {name: "resolute", value: "10", mod: "+0"},
    {name: "strong", value: "10", mod: "+0"},
    {name: "vigilant", value: "5", mod: "+5"}
  ],
  totalXP: "10",
  unspentXP: "10",
  gear: {
    weapons: "2 fencing swords [1d8] (precise), Longbow [1d8] (precise)",
    armor: "Laminated armor [1d6+1] (reinforced)",
    misc: "5 flame arrows, 2 doses of a moderate Antidote, 4 Herbal Cures, 1 Elixir of Life"
  },
  defense: "-4",
  painThreshold: "5",
  notes: "Marvello stays back whenever possible, assisting his companions with well-targeted arrows. If he deems it necessary, he does not shy away from joining the melee himself, armed with his two fencing swords and all the experience he gained during The Great War."
}

const Marvello = () => (
  <CharSheet {...character} />
)

export default Marvello;