import { Link } from "react-router-dom"
import { AddFeedback } from "../components/AddFeedback"
import { useTranslation } from "react-i18next"

export function PageAdd(){
  document.title = "Add Feedback"
  let {t} = useTranslation()
  return (
    <section>
      <div className="container py-5">
        <Link to="/" style={{fontWeight: "700", fontSize: "18px", color: "#647196", textDecoration: "none"}}>{t("goback")}</Link>
        <div className="d-flex align-items-center justify-content-center" style={{height: "700px", marginTop: "30px"}}>
          <AddFeedback/>
        </div>
      </div>
    </section>
  )
}