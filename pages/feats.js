import * as featsList from "../public/feats.json"
import RulesList from "../components/rules"

const Feats = () => {
  return <RulesList title={featsList.title} items={featsList.items}  reference={featsList.pageRef}/>
}

export default Feats;