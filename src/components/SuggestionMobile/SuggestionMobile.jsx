import { Link } from "react-router-dom"
import { Btn } from "../Button"
import "./SugMob.scss"
import { useTranslation } from "react-i18next"

export function SuggestionMobile(){
  let {t} = useTranslation();
  return (
    <section id="sugMob">
      <div className="container d-flex align-items-center justify-content-between">
        <div>
        <span>{t("sortBy")}:</span>
        <select style={{width: "100px"}}>
          <option value="Most Upvotes" defaultValue style={{color: "black"}}>{t("MostUpvotes")}</option>
          <option value="Least Upvotes" style={{color: "black"}}>{t("LeastUpvotes")}</option>
          <option value="Most Comments" style={{color: "black"}}>{t("MostComments")}</option>
          <option value="Least Comments" style={{color: "black"}}>{t("LeastComments")}</option>
        </select>
      </div>
      <Link to="/addFeedback"><Btn>+ {t("addFeebdack")}</Btn></Link>
      </div>
    </section>
  )
}