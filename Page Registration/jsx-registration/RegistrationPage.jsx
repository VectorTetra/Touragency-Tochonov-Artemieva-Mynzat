function RegistrationPage(props){
    return(
        <form>
            <div class="container">
                <h1>Реєстрація</h1>

                {
                    props.RegistrationInfo.map(item => 
                    <RegistrationItem name={item.name} type={item.type} text={item.Text} placeHolder={item.PlaceHolder}/>)
                }

                <p id="termsText">Створюючи аккаунт ви походжуєтесь на <a href="#">Умови та Конфіденційність</a> сайту.</p>
                <button type="submit" class="registerbtn">Зареєструватися</button>
            </div>
            <div class="container signin">
                <p>Вже є аккаунт? <a href="#">Увійти</a>.</p>
            </div>
        </form>
    )
}