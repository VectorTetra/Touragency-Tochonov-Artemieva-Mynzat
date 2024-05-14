function ForAgents(props)
{
    const [nickname, setNickname] = React.useState('');
    const [password, setPassword] = React.useState('');
    const nicknameChange = (e) => {
        setNickname(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const submitData = () => {
        let request = JSON.stringify({
            Login: nickname,
            Password: password
        });
        $.ajax({
            url: 'https://26.162.95.213:7099/api/TouragencyAccountLogin', // Замініть на ваш URL API
            method: 'POST',
            contentType: "application/json",
            data: request,
            success: function (data) {
                let userData = {touragencyEmployeeLogin: data.login, touragencyEmployeeId: data.touragencyEmployeeId, isClient: false, touragencyAccountRoleId: data.touragencyAccountRoleId};
                localStorage.setItem('userData', JSON.stringify(userData));
                window.location.href = "../MainPage/index.html";
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
    };
    return(
        <div class="container">
            <h1 style={{textAlign: "center"}}>Ввійти в аккаунт</h1>
            <input type="text" value={nickname} onChange={nicknameChange} placeholder="Введіть логін турагента" />
            <input type="password" placeholder="Введіть пароль" name="password" value={password} onChange={passwordChange}/><br />
            <button onClick={submitData} class="loginbtn">Ввійти</button>
        </div>
    )
}