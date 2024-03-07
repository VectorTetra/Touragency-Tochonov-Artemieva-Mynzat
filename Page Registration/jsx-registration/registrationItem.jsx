function RegistrationItem(props)
{
    return(
        <div class="registration-item">
            <label for={props.name}><b>{props.text}</b></label>
            <input type={props.type} placeholder={props.placeHolder} name={props.name} id={props.name} required/>
            <span class="inv-span"></span>
        </div>
    )
}