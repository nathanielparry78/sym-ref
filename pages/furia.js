import CharSheet from "./char-sheet";

const character = {
  abilities: "Anathema (master), Brimstone Cascade (master), Exceptionally Cunning (adept), Exceptionally Resolute (master), Flame Wall (master), Loremaster (master), Recovery (adept), Ritualist (master, Break Link, Clairvoy- ance, Magic Circle, Seven-le- ague Stride, Soul Stone, Tale↵of Ashes), Steadfast (adept), Wizardry (master)",
  derived: {
    composure: {current: "16", max: "16"},
    corruption: {current: "0", max: "0"},
    toughness: {current: "10", max: "10"}
  },
  name: "Kullinan Furia",
  occupation: "Order Master",
  race: "Human (Ambrian)",
  stats: [
    {name: "accurate", value: "10", mod: "+0"},
    {name: "cunning", value: "15", mod: "-5"},
    {name: "discreet", value: "10", mod: "+0"},
    {name: "persuasive", value: "11", mod: "-1"},
    {name: "quick", value: "5", mod: "+5"},
    {name: "resolute", value: "18", mod: "-8"},
    {name: "strong", value: "7", mod: "+3"},
    {name: "vigilant", value: "9", mod: "+1"}
  ],
  totalXP: "10",
  unspentXP: "0",
  gear: {
    weapons: "None",
    armor: "Order Cloak 2 (flexible) + 3 (protective amulet)"
  },
  defense: "+5",
  painThreshold: "4",
  notes: "Kullinan has not reached his venerable age by needlessly placing himself in harm’s way. If violence can be avoided it is for the best, but if he has to fight he often starts by shrouding himself in a flaming firewall and then blasts any oncoming enemies with brimstone cascades."
}

const Furia = () => (
  <CharSheet {...character} />
)

export default Furia;