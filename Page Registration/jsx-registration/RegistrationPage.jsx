function RegistrationPage(props){
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.Firstname.value);
        console.log(e.target.Lastname.value);
        console.log(e.target.Middlename.value);
        console.log(e.target.TouristNickname.value);
        console.log(e.target.Phone.value);
        console.log(e.target.Email.value);
        console.log(e.target.PasswordConfirm.value);
        console.log(e.target.Password.value);
        
        if(e.target.Password.value !== e.target.PasswordConfirm.value){
            alert("Паролі не співпадають!");
            return;
        }
        let request = JSON.stringify({
            FirstName: e.target.Firstname.value,
            LastName: e.target.Lastname.value,
            MiddleName: e.target.Middlename.value,
            TouristNickname: e.target.TouristNickname.value,
            Phone: e.target.Phone.value,
            Email: e.target.Email.value,
            Password: e.target.Password.value,
            PasswordConfirm: e.target.PasswordConfirm.value
        });
        $.ajax({
            url: 'https://26.162.95.213:7098/api/ClientRegister', // Замініть на ваш URL API
            method: 'POST',
            contentType: "application/json",
            data: request,
            success: function (data) {
                alert("Ви успішно зареєструвались!");
                window.location.href = "../Page Authentication/Authentication.html";
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
       
    };
    return(
        <form onSubmit={submitHandler}>
            <div class="container">
                <h1>Реєстрація</h1>

                {
                    props.RegistrationInfo.map(item => 
                    <RegistrationItem name={item.name} type={item.type} text={item.Text} placeHolder={item.PlaceHolder}/>)
                }

                <p id="termsText">Створюючи аккаунт ви походжуєтесь на <a href="../Page Public contracts and offers/publicContractsAndOffers.html">Умови та Конфіденційність</a> сайту.</p>
                <button type="submit" class="registerbtn">Зареєструватися</button>
            </div>
            <div class="container signin">
                <p>Вже є аккаунт? <a href="../Page Authentication/Authentication.html">Увійти</a>.</p>
            </div>
        </form>
    )
}