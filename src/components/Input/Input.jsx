export function Input({type = 'text', placeholder, required = false, className, name }){
  return <input type={type} placeholder={placeholder} required={required} className={className} name={name}/>
}