import { Aside } from "../components/Aside";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main";
import { SuggestionMobile } from "../components/SuggestionMobile";



export function Tablet(){
  document.title = "Tablet";
  return (
    <>
      <Aside/>
      <Header/>
      <SuggestionMobile/>
      <Main/>
    </>
  )
}