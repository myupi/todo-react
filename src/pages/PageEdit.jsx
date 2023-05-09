import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Edit } from "../components/Edit"

export function PageEdit(){
  document.title = "Edit Feedback"
  let {t} = useTranslation()
  return (
    <section>
      <div className="container py-5">
        <Link to="/" style={{fontWeight: "700", fontSize: "18px", color: "#647196", textDecoration: "none"}}>{t("goback")}</Link>
        <div className="d-flex align-items-center justify-content-center" style={{height: "700px", marginTop: "30px"}}>
          <Edit/>
        </div>
      </div>
    </section>
  )
}