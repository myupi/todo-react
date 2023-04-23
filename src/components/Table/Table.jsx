import { TBody } from "../TBody";
import { Thead } from "../Thead";

export function Table({todos,removeTodo, ckeck}){
  return <section>
    <div className="container">
      <table className="table">
        <Thead/>
        <TBody  todos={todos} removeTodo={removeTodo} ckeck={ckeck}/>
      </table>
    </div>
  </section>
}