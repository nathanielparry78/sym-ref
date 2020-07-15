import * as maneuversList from "../public/maneuvers.json";
import RulesList from "../components/rules";

const Maneuvers = () => {
  return <RulesList title={maneuversList.title} items={maneuversList.items} reference={maneuversList.pageRef}/>
}

export default Maneuvers;