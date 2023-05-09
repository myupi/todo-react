import { Link } from "react-router-dom";
import { Btn } from "../Button";
import "./AddFeedback.scss"
import { useTranslation } from "react-i18next";

export function AddFeedback(){
  let { t } = useTranslation();
  return (
    <form id="add">
      <h3>{t("CreateNewFeedback")}</h3>
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