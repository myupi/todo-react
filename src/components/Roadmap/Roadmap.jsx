import { useTranslation } from "react-i18next"
import "./Roadmap.scss"

export function Roadmap({planned, inProgress, live}){
  let {t} = useTranslation();
  return (
    <div className="flex-column Roadmap">
      <div className="Roadmap-top d-flex align-items-center justify-content-between">
        <h2>{t("roadmap")}</h2>
        <a href="/">{t("view")}</a>
      </div>
      <ul>
        <li className="d-flex align-items-center justify-content-between"><span>{t("planned")}</span><span>{planned}</span></li>
        <li className="d-flex align-items-center justify-content-between"><span>{t("inProgress")}</span><span>{inProgress}</span></li>
        <li className="d-flex align-items-center justify-content-between"><span>{t("live")}</span><span></span>{live}</li>
      </ul>
    </div>
  )
}