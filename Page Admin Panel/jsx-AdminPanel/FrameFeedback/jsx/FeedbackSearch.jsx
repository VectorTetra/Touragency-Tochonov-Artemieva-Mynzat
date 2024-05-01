function FeedbackSearch(props) {

    console.log("Received props:", props.feedback);

    const [inputTourName, setInputTourName] = React.useState("");
    const [inputCountryName, setInputCountryNameFeefback] = React.useState("");
    const [inputUserName, setInputUserName] = React.useState("");
    const [feedback, setFeedBack] = React.useState(props.feedback);
    const [quantity, setQuantity] = React.useState(props.feedback.length);

    console.log("Вывод0", props.feedback);
 
    React.useEffect(() => {
        props.setQuantity(quantity);
        props.setFeedBack(feedback);
    }, [quantity, feedback]);

    console.log("Вывод2", feedback);
    
    const handleSearch = () => {
        const filteredFeedback = props.feedback.filter(feedback =>
            feedback.nameTour.toLowerCase().includes(inputTourName.toLowerCase()) &&
            (feedback.nameCountry.some(country => country.toLowerCase().includes(inputCountryName.toLowerCase()))) &&
            // feedback.nameCountry.toLowerCase().includes(inputCountryName.toLowerCase()) &&
            feedback.login.toLowerCase().includes(inputUserName.toLowerCase())
        );
        
        setFeedBack(filteredFeedback);
        setQuantity(filteredFeedback.length);
        
    };

    console.log("Begin1",   feedback.nameTour);
    console.log("Begin2",   feedback.nameCountry);
    console.log("Begin3",    feedback.login);

    

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleClear = () => {
        setInputTourName("");
        setInputCountryNameFeefback("");
        setInputUserName("");
        setFeedBack(props.feedback);
        setQuantity(props.feedback.length);
    };

    return (
        <div className="blockSearch">

            <div className="text"><h3>Пошук</h3></div>

            <div className="EditFormRow searchBarRow">
                    <input
                        name="login"
                        value={inputUserName}
                        placeholder="Введіть Логін"
                        className="EditFormInput"
                    onChange={(event) => setInputUserName(event.target.value)}
                    onKeyDown={handleKeyDown}
                    />
                    <input
                        name="tourName"
                        value={inputTourName}
                        placeholder="Введіть назву туру"
                        className="EditFormInput"
                    onChange={(event) => setInputTourName(event.target.value)}
                    onKeyDown={handleKeyDown}
                    />
                    <input
                        name="countryName"
                        value={inputCountryName}
                        placeholder="Введіть назву країни"
                        className="EditFormInput"
                    onChange={(event) => setInputCountryNameFeefback(event.target.value)}
                    onKeyDown={handleKeyDown}
                    />
            </div >
            <div className="searchbutton">
			<button type="submit"  onClick={handleSearch}>
				Шукати
			</button>
			<button type="submit"  onClick={handleClear}>
				Очистити
			</button> 
                <hr />
            </div>
        </div>
    );
}
