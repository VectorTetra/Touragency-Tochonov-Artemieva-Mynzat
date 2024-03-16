function AuthenticationItem(props)
{
    return(
         <div class="login-item">
            <label for={props.name}><b>{props.text}</b></label><br/>
            <input type={props.type} placeholder={props.placeHolder} name={props.name} id={props.name}/><br/>
            <span class="inv-span"></span>
         </div>
    )
}