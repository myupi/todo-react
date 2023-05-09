import { Btn } from '../Button'
import "./Suggestion.scss"
import Light from "../../assets/images/Light.svg"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function Suggestion(){
  let {t} = useTranslation();
  return (
    <div className="Suggestion">
      <h2><img src={Light} alt="" style={{marginBottom: "5px"}}/> 6 {t("suggestions")}</h2>
      <div>
        <span>{t("sortBy")}:</span>
        <select>
          <option value="Most Upvotes" defaultValue style={{color: "black"}}>{t("MostUpvotes")}</option>
          <option value="Least Upvotes" style={{color: "black"}}>{t("LeastUpvotes")}</option>
          <option value="Most Comments" style={{color: "black"}}>{t("MostComments")}</option>
          <option value="Least Comments" style={{color: "black"}}>{t("LeastComments")}</option>
        </select>
      </div>
      <Link to="/addFeedback"><Btn>+ {t("addFeebdack")}</Btn></Link>
    </div>
  )
}