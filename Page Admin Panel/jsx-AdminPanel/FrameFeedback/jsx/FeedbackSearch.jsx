function FeedbackSearch(props) {

    const [inputTourName, setInputTourName] = React.useState("");
    const [inputCountryName, setInputCountryNameFeefback] = React.useState("");
    const [inputUserName, setInputUserName] = React.useState("");
    
    const handleSearch = () => {
    };
 
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleClear = () => {
        setInputTourName("");
        setInputCountryNameFeefback("");
        setInputUserName("");
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
