import * as critsList from "../public/Crits.json";
import RulesList from "../components/rules";

const Crits = () => {
  return <RulesList title={critsList.title} items={critsList.items}  reference={critsList.pageRef}/>
}

export default Crits;