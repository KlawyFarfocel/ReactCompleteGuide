export default function SidebarTask({title,className,onClick}){
    return(
        <li onClick={onClick}  className={className} >
            <p className="ml-3">{title}</p>
        </li>
    )
}