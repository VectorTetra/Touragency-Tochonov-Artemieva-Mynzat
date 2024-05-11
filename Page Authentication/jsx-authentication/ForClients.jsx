function ForClients(props) {
    const [activeTab, setActiveTab] = React.useState("Email");
    const [email, setEmail] = React.useState('');
    const [nickname, setNickname] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');

    //  Functions to handle Tab Switching
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("Email");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("Nickname");
    };
    const handleTab3 = () => {
        // update the state to tab2
        setActiveTab("Phone");
    };
    // Functions to handle input changes
    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const nicknameChange = (e) => {
        setNickname(e.target.value);
    }
    const phoneChange = (e) => {
        setPhone(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }
    const submitData = () => {
        let emailToSend = email === '' ? null : email;
        let nicknameToSend = nickname === '' ? null : nickname;
        let phoneToSend = phone === '' ? null : phone;
        let request = JSON.stringify({
            TouristNickname: nicknameToSend,
            Phone: phoneToSend,
            Email: emailToSend,
            Password: password
        });
        $.ajax({
            url: 'https://26.162.95.213:7098/api/ClientLogin', // Замініть на ваш URL API
            method: 'POST',
            contentType: "application/json",
            data: request,
            success: function (data) {
                let userData = {clientId: data.id, clientTouristNickname: data.touristNickname, isClient: true, touragencyAccountRoleId: data.touragencyAccountRoleId};
                localStorage.setItem('userData', JSON.stringify(userData));
                window.location.href = "../MainPage/index.html";
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
    };

    return (
        <div class="container">
            <h1 style={{ textAlign: "center" }}>Ввійти в аккаунт</h1>
            <ul className="tabs">
                <li className={activeTab === "Email" ? "active" : ""}
                    onClick={handleTab1}>Email</li>
                <li className={activeTab === "Nickname" ? "active" : ""}
                    onClick={handleTab2}>Нікнейм</li>
                <li className={activeTab === "Phone" ? "active" : ""}
                    onClick={handleTab3}>Номер телефону</li>
            </ul>
            {
                activeTab === "Email" && <input type="email" value={email} onChange={emailChange} placeholder="Ваш Email" pattern="[A-Za-z.-_]{3,}@[A-Za-z]+.[A-Za-z]+$" />
            }
            {
                activeTab === "Nickname" && <input type="text" value={nickname} onChange={nicknameChange} placeholder="Ваш нік" />
            }
            {
                activeTab === "Phone" && <input type="text" value={phone} onChange={phoneChange} placeholder="Ваш номер телефону" pattern="^\\+380[0-9]{9}$" />
            }
            {/* ^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$ */}
            <input type="password" placeholder="Введіть пароль" name="password" value={password} onChange={passwordChange}/><br />
            <button class="loginbtn" onClick={submitData}>Ввійти</button>
        </div>
    )
}