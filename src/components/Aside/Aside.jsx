import { Roadmap } from "../Roadmap";
import { Tabs } from "../Tabs";
import "./Aside.scss"

export function Aside(){
  return (
    <aside>
      <div className="box">
        <Tabs/>
        <Roadmap/>
      </div>
    </aside>
    )
}