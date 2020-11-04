import CharSheet from "./char-sheet";

const character = {
  abilities: "Alchemy (adept), Man-at-Arms (adept), Siege Expert (adept), Two-handed Force (novice), Strangler (adept), Tactician (master)",
  derived: {
    composure: {current: "11", max: "11"},
    corruption: {current: "0", max: "0"},
    toughness: {current: "14", max: "14"}
  },
  name: "Solomon",
  occupation: "Business Man",
  race: "Ambrian",
  stats: [
    {name: "accurate", value: "10", mod: "0"},
    {name: "cunning", value: "15", mod: "-5"},
    {name: "discreet", value: "7", mod: "+3"},
    {name: "persuasive", value: "10", mod: "+0"},
    {name: "quick", value: "9", mod: "+1"},
    {name: "resolute", value: "8", mod: "+2"},
    {name: "strong", value: "14", mod: "-4"},
    {name: "vigilant", value: "6", mod: "+4"}
  ],
  totalXP: "10",
  unspentXP: "10",
  gear: {
    weapons: "Portable Firetube: 6 charges [1d12] (area cone, flaming), Firetube as Warhammer [1d10] (blood-letting, massive, unwieldy)",
    armor: "Double Chain Mail [1d6+1] (reinforced)",
    misc: "3 Choking Spores, 3 Alchemical Grenades"
  },
  defense: "-1",
  painThreshold: "7",
  notes: "Solomon keeps at a distance, fires the firetube and throws grenades. Given the opportunity he will try to strangle an opponent from behind, and when in a tight spot he uses the firetube used as a warhammer to batter his enemies."
}

const Elfeno = () => (
  <CharSheet {...character} />
)

export default Elfeno;