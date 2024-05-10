function AuthenticationPage(props)
{
    const [activeTab, setActiveTab] = React.useState("ForClients");

    //  Functions to handle Tab Switching
    const handleTab1 = () => {
    // update the state to tab1
        setActiveTab("ForClients");
    };
    const handleTab2 = () => {
    // update the state to tab2
        setActiveTab("ForAgents");
    };
    return(
        <div>
            <ul className="clients-agents-switch">
                <li
                className={activeTab === "ForClients" ? "active" : ""}
                onClick={handleTab1}>
                    Як Клієнт
                </li>
                <li
                  className={activeTab === "ForAgents" ? "active" : ""}
                  onClick={handleTab2}>
                  Як Турагент
                </li>
            </ul>
            <form> 
                
            {activeTab === "ForClients" ? <ForClients /> : <ForAgents ForAgents={props.AuthenticationData}/>}
            <div class="container signin">
                <p>Немає аккаунту? <a href="#">Зареєструватися</a></p>
            </div>
            </form>
        </div>
    )
}