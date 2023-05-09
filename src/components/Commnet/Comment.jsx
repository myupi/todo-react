import { Btn } from "../Button/Btn";
import "./Comment.scss"

export function Comment(){
  return (
    <>
    <div className="comment d-flex">
      <div className="com-mid">
        <h3>Q&A within the challenge hubs</h3>
        <p>Challenge-specific Q&A would make for easy reference.</p>
        <Btn>Feature</Btn>
      </div>
      <div className="com-left">
        <Btn className={"p"}>65</Btn>
      </div>
      <div className="com-right">
        <i className="fa-solid fa-comment"></i>
        <span>123</span>
      </div>
    </div>
    </>
  )
}