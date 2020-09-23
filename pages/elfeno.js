import CharSheet from "./char-sheet";
import Saving from "../components/saving";

const character = {
  abilities: "Blessed Shield (master), Exceptionally Persuasive (adept), Exceptionally Resolute (adept), Leader (master), Loremaster (novice), Prios’ Burning Glass (adept), Ritualist (adept, Command Confession, Exorcism, Sanctifying Rite), Theurgy (master)",
  derived: {
    composure: {current: "13", max: "13"},
    corruption: {current: "0", max: "0"},
    toughness: {current: "10", max: "10"}
  },
  name: "Father Elfeno",
  occupation: "First Theurg",
  race: "Ambrian",
  stats: [
    {name: "accurate", value: "7", mod: "+3"},
    {name: "cunning", value: "11", mod: "-1"},
    {name: "discreet", value: "5", mod: "+5"},
    {name: "persuasive", value: "17", mod: "-7"},
    {name: "quick", value: "9", mod: "+1"},
    {name: "resolute", value: "15", mod: "-5"},
    {name: "strong", value: "10", mod: "+0"},
    {name: "vigilant", value: "10", mod: "+0"}
  ],
  totalXP: "10",
  unspentXP: "10",
  gear: {
    weapons: "None",
    armor: "Blessed Robe 2 (flexible)/ +4 (Blessed Shield)"
  },
  defense: "+1",
  painThreshold: "5",
  notes: "Father Elfeno is first and foremost a warrior in Prios’ army, even if he at the moment has opted to serve the sun god by tending to the herd of wicked fools in the Hold. But when given a chance to test his powers in dire situations he holds nothing back – he surrounds himself with a Blessed Shield and then attacks the enemy with rays of holy light."
}

const Elfeno = () => (
  <>
    <Saving></Saving>
    <CharSheet {...character} />
  </>
)

export default Elfeno;