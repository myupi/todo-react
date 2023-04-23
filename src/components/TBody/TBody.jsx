import { Btn } from "../Button";
import "./TBody.css"

export function TBody({todos, removeTodo, check}){
  return <tbody>
    {todos.map((todo,index)=>{
    return <tr key={index}>
      <td scope="col" className="w-25"><input type="checkbox" checked={todo.fulfilled} onClick={() => check(todo.id)}/></td>
      <td scope="col" className={todo.fulfilled ? "txt w-50" : "w-50"}>{todo.todo}</td>
      <td scope="col" className="w-25"><Btn index={index} removeTodo={removeTodo} className={"btn btn-primary w-100"}>Delete</Btn></td>
    </tr>
    })}
  </tbody>
}