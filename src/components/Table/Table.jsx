import { TBody } from "../TBody";
import { Thead } from "../Thead";

export function Table({todos,removeTodo, check}){
  return <section>
    <div className="container">
      <table className="table">
        <Thead/>
        <TBody  todos={todos} removeTodo={removeTodo} check={check}/>
      </table>
    </div>
  </section>
}