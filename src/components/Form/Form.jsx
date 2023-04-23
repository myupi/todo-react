import { Btn } from "../Button";
import { Input } from "../Input";




export function Form({ todos, setTodos }){
  const Submit = (evt) =>{
    evt.preventDefault();
    let {todo} = evt.target.elements;
    let obj = {
      id: todos.length + 1,
      todo: todo.value,
      fulfilled: false
    }
    setTodos([obj, ...todos]);
    todo.value = null
  }
  localStorage.setItem("todos", JSON.stringify(todos))
  return <section>
    <div className="container my-4">
      <form className="d-flex align-items-center justify-content-center gap-2" onSubmit={Submit}>
        <Input placeholder={"Enter your plan..."} name={"todo"} required={true} className={"form-control w-75"}/>
        <Btn type={"Submit"}>Add</Btn>
      </form>
    </div>
  </section>
}