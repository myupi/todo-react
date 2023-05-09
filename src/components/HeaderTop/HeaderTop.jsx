import { useTranslation } from "react-i18next";
import "../Header/Header.scss";

export function HeaderTop() {
  let { t } = useTranslation();

  let aside = document.querySelector("aside");
  let body = document.querySelector("body");
  let open = document.querySelector(".open");
  let close = document.querySelector(".close");

  let openAside = () => {
    aside.style.transform = "translateX(0%)";
    body.style.overflow = "hidden";
    open.style.display = "none";
    close.style.display = "block";
  };

  let closeAside = () => {
    aside.style.transform = "translateX(100%)";
    body.style.overflow = "visible";
    close.style.display = "none";
    open.style.display = "block";
  };

  return (
    <div className="top d-flex align-items-center justify-content-between">
      <div className="top-left">
        <h2>Frontend Mentor</h2>
        
        <p>{t("feedbackBoard")}</p>
      </div>
      <div className="top-right">
        <i className="fa-2x fa-solid fa-bars open" onClick={openAside}></i>
        <i className="fa-2x fa-solid fa-x close" onClick={closeAside}></i>
      </div>
    </div>
  );
}
