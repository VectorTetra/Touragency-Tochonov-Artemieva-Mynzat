function ForClients(props)
{
    const [activeTab, setActiveTab] = React.useState("Email");

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
    return(
        <div class="container">
                <h1 style={{textAlign: "center"}}>Ввійти в аккаунт</h1>
                <ul className="tabs">
                    <li className={activeTab === "Email" ? "active" : ""}
                onClick={handleTab1}>Email</li>
                    <li className={activeTab === "Nickname" ? "active" : ""}
                onClick={handleTab2}>Нікнейм</li>
                    <li className={activeTab === "Phone" ? "active" : ""}
                onClick={handleTab3}>Номер телефону</li>
                </ul>
                {
                    activeTab === "Email" && <input type="email" placeholder="Ваш Email" pattern="[A-Za-z.-_]{3,}@[A-Za-z]+.[A-Za-z]+$"/>
                }
                {
                    activeTab === "Nickname" && <input type="text" placeholder="Ваш нік" pattern="[A-Za-z]"/>
                }
                {
                    activeTab === "Phone" && <input type="text" placeholder="Ваш номер телефону" pattern="^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$"/>
                }

                <input type="password" placeholder="Введіть пароль" name="password"/><br/>
                <button type="submit" class="loginbtn">Ввійти</button>
        </div>
    )
}