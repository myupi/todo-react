import { HeaderTop } from "../HeaderTop"
import { Roadmap } from "../Roadmap"
import { Tabs } from "../Tabs/Tabs"
import "./Header.scss"

export function Header(){
  return (
    <section id="Header">
      <div className="container py-2">
        <div className="box">
          <HeaderTop/>
          <Tabs/>
          <Roadmap planned={3} inProgress={2} live={1}/>
        </div>
      </div>
    </section>
  )
}