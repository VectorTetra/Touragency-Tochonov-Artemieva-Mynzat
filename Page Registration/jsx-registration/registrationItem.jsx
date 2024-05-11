function RegistrationItem(props)
{
    return(
        <div class="registration-item">
            <label for={props.name}><b>{props.text}</b></label><br/>
            {
                (props.name === "Middlename" ?
                    <input type={props.type} placeholder={props.placeHolder} name={props.name} id={props.name} pattern={props.pattern}/>
                    :
                    <input type={props.type} placeholder={props.placeHolder} name={props.name} id={props.name} pattern={props.pattern} required/>
                )
                
            }
            <br/>
            <span class="inv-span"></span>
        </div>
    )
}