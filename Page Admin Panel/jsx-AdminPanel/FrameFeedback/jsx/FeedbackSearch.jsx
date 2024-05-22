function FeedbackSearch(props) {
    let context = React.useContext(window.FrameFeedbackContext);
    const [inputTourName, setInputTourName] = React.useState("");
    const [inputCountryName, setInputCountryNameFeefback] = React.useState("");
    const [inputUserName, setInputUserName] = React.useState("");
    
    const handleSearch = () => {
        if(inputTourName === "" && inputCountryName === "" && inputUserName === ""){
            context.Get200Last();
        }
        else{
            $.ajax({
				url: 'https://26.162.95.213:7100/api/Review', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: {
					SearchParameter: 'GetByCompositeSearch',
					TouristNickname: inputUserName.length === 0 ? null : inputUserName,
                    TourName: inputTourName.length === 0 ? null : inputTourName,
                    CountryName: inputCountryName.length === 0 ? null : inputCountryName
				},
				statusCode: {
					200: function (data) {
						context.setReviews(data);
					},
					204: function () {
						context.setReviews([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});   
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
                    />
                    <input
                        name="tourName"
                        value={inputTourName}
                        placeholder="Введіть назву туру"
                        className="EditFormInput"
                    onChange={(event) => setInputTourName(event.target.value)}
                    />
                    <input
                        name="countryName"
                        value={inputCountryName}
                        placeholder="Введіть назву країни"
                        className="EditFormInput"
                    onChange={(event) => setInputCountryNameFeefback(event.target.value)}
                    />
            </div >
            <div className="searchbutton">
			<button onClick={handleSearch}>
				Шукати
			</button>
			<button onClick={handleClear}>
				Очистити
			</button> 
                <hr />
            </div>
        </div>
    );
}
