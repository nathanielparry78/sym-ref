import * as critsList from "../public/crits.json";
import RulesList from "../components/rules";

const Crits = () => {
  return <RulesList title={critsList.title} items={critsList.items}  reference={critsList.pageRef}/>
}

export default Crits;