export function Btn({children, type = "button", removeTodo, index, className = "btn btn-primary w-25"}){
  return <button type={type} className={className} onClick={() => (removeTodo ? removeTodo(index) : null)}>{children}</button>
}