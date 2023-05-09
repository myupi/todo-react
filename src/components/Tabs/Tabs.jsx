import { useTranslation } from "react-i18next";
import { Btn } from "../Button";
import "./Tabs.scss";
import useDarkMode from "../../hook/darkModeHook";

export function Tabs() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  let { t, i18n } = useTranslation();
  let lang = i18n.language;
  function changeLanguage(evt) {
    i18n.changeLanguage(evt.target.value);
  }
  return (
    <div className="align-items-center flex-wrap Tabs">
      <Btn>{t("all")}</Btn>
      <Btn>UI</Btn>
      <Btn>UX</Btn>
      <Btn>{t("enhancement")}</Btn>
      <Btn>{t("bug")}</Btn>
      <Btn>{t("feature")}</Btn>
      <button className="toggle-button" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <i class="fa-solid fa-circle-half-stroke"></i>
        ) : (
          <i class="fa-solid fa-circle-half-stroke"></i>
        )}
      </button>
      <select onChange={changeLanguage} defaultValue={lang}>
        <option value="en">En</option>
        <option value="ru">Ru</option>
        <option value="uz">Uz</option>
      </select>
    </div>
  );
}
