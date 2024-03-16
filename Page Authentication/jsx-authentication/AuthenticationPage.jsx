function AuthenticationPage(props)
{
    return(
        <form>
            <div class="container">
                <h1>Ввійти в аккаунт</h1>
                {
                    props.AuthenticationInfo.map(item => 
                    <AuthenticationItem name={item.name} type={item.type} text={item.Text} placeHolder={item.PlaceHolder}/>)
                }
                <button type="submit" class="registerbtn">Ввійти</button>
        </div>
        <div class="container signin">
            <p>Немає аккаунту? <a href="#">Зареєструватися</a></p>
        </div>
        </form>
    )
}