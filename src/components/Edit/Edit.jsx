import { Link } from "react-router-dom";
import { Btn } from "../Button";
import "./Edit.scss"
import { useTranslation } from "react-i18next";

export function Edit(){
  let { t } = useTranslation();
  return (
    <form id="edit">
      <h3>{t("edit")}</h3>
      <label htmlFor="title"><h5>{t("addTitle")}</h5></label>
      <p>{t("addTitleHelper")}</p>
      <textarea name="title" id="title"></textarea>
      <label htmlFor="menu"><h5>{t("category")}</h5></label>
      <p>{t("categoryHelper")}</p>
      <select name="menu" id="menu">
        <option value="Feature" defaultValue>{t("feature")}</option>
        <option value="UI">UI</option>
        <option value="UX">UX</option>
        <option value="Enhancement">{t("enhancement")}</option>
        <option value="Bug">{t("bug")}</option>
      </select>
      <label htmlFor="menu"><h5>{t("UpdateStatus")}</h5></label>
      <p>{t("categoryHelper")}</p>
      <select name="menu" id="menu">
        <option value="Suggestion" defaultValue>{t("suggestions")}</option>
        <option value="Planned">{t("planned")}</option>
        <option value="In-Progress">{t("inProgress")}</option>
        <option value="Live">{t("live")}</option>
      </select>
      <label htmlFor=""><h5>{t("FeedbackDetail")}</h5></label>
      <p>{t("FeedbackDetailHelper")}</p>
      <textarea name="feedback" id="feedback"></textarea>
      <div className="buttons">
        <Btn>{t("addFeebdack")}</Btn>
        <Link to="/"><Btn>{t("cancel")}</Btn></Link>
      </div>
    </form>
  )
}