function TourSearchBar(props) {
	const context = React.useContext(window.FrameTourContext);
	// const [inputIdValue, setInputIdValue] = React.useState(null);
	const [inputTourNameValue, setInputTourNameValue] = React.useState("");
	const [inputCountryNameValue, setInputCountryNameValue] = React.useState("");
	const [inputSettlementNameValue, setInputSettlementNameValue] = React.useState("");
	const [inputHotelNameValue, setInputHotelNameValue] = React.useState("");

	// const handleInputIdValue = (event) => {
	// 	setInputIdValue(event.target.value);
	// }
	const handleInputTourNameValue = (event) => {
		setInputTourNameValue(event.target.value);
	}
	const handleInputCountryNameValue = (event) => {
		setInputCountryNameValue(event.target.value);
	}
	const handleInputSettlementNameValue = (event) => {
		setInputSettlementNameValue(event.target.value);
	}
	const handleInputHotelNameValue = (event) => {
		setInputHotelNameValue(event.target.value);
	}
	// const handleInputSearchById = (event) => {
	// }
	const handleInputSearchByOther = (event) => {
		event.preventDefault();
		if(inputTourNameValue === "" && inputCountryNameValue === "" && inputSettlementNameValue === "" && inputHotelNameValue === "") {
			$.ajax({
				url: 'https://26.162.95.213:7100/api/TourName', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'Get200Last' },
				statusCode: {
					200: function (data) {
						context.setTourNames(data);
					},
					204: function () {
						context.setTourNames([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
		else{
			$.ajax({
				url: 'https://26.162.95.213:7100/api/TourName', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'GetByCompositeSearch',
					Name: inputTourNameValue.length > 0 ? inputTourNameValue : null,
					CountryName: inputCountryNameValue.length > 0 ?inputCountryNameValue: null,
					SettlementName: inputSettlementNameValue.length > 0 ?inputSettlementNameValue : null,
					HotelName: inputHotelNameValue.length > 0 ? inputHotelNameValue : null
				},
				statusCode: {
					200: function (data) {
						context.setTourNames(data);
					},
					204: function () {
						context.setTourNames([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
	}
	return (
		<form className="EditFormRow searchBarRow" method="post">
			{/* <input type="number" min={1} className="EditFormInput" name="Id" value={inputIdValue} onInput={handleInputIdValue} placeholder="Введіть ID" /> */}
			<div className="EditFormColumn" >
				<input className="EditFormInput" name="TourName" value={inputTourNameValue} onInput={handleInputTourNameValue} placeholder="Введіть назву туру" />
				<input className="EditFormInput" name="CountryName" value={inputCountryNameValue} onInput={handleInputCountryNameValue} placeholder="Введіть назву країни" />
			</div>
			<div className="EditFormColumn" >
				<input className="EditFormInput" name="SettlementName" value={inputSettlementNameValue} onInput={handleInputSettlementNameValue} placeholder="Введіть назву міста" />
				<input className="EditFormInput" name="HotelNameValue" value={inputHotelNameValue} onInput={handleInputHotelNameValue} placeholder="Введіть назву готелю" />
			</div>
			{/* <input type="submit" className="buttonSearchCity" name="buttonSearchById" value="Пошук по ID" onClick={handleInputSearchById} /> */}
			<button className="buttonSearchCity" name="buttonSearchByOther" value="Розширений пошук" onClick={handleInputSearchByOther} >Розширений пошук</button>
		</form>
	);
}