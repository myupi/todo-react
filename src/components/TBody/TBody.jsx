import { Btn } from "../Button";

export function TBody({todos, removeTodo, ckeck}){
  return <tbody>
    {todos.map((todo,index)=>{
    return <tr key={index}>
      <input type="ckeckbox" checked={todo.fulfilled} onClick={ckeck(todo.id)}/>
      <td scope="col" className="w-50">{todo.todo}</td>
      <td scope="col" className="w-25"><Btn index={index} removeTodo={removeTodo} className={"btn btn-primary w-100"}>Delete</Btn></td>
    </tr>
    })}
  </tbody>
}