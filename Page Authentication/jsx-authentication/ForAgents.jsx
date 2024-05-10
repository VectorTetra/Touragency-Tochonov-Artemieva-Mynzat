function ForAgents(props)
{
    return(
        <div class="container">
            <h1 style={{textAlign: "center"}}>Ввійти в аккаунт</h1>
            {
                props.ForAgents.map(item => 
                <AuthenticationItem name={item.name} type={item.type} text={item.Text} placeHolder={item.PlaceHolder}/>)
            }
            <button type="submit" class="loginbtn">Ввійти</button>
        </div>
    )
}