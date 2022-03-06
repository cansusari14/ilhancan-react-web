export default function Button(props){
   return(
     <div>
         <button href={props.href} onClick={props.onClick}>
            {props.text}
         </button>
     </div>  
   ) 
}