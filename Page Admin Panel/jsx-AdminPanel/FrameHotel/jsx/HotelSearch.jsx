function HotelSearch(props) {
	const context = React.useContext(window.FrameHotelContext);
	const [inputHotelName, setInputHotelName] = React.useState("");
	const [inputCountryName, setInputCountryName] = React.useState("");
	const [inputCityName, setInputCityName] = React.useState("");


	const handleSearch = (event) => {
		event.preventDefault();
		if (inputHotelName === "" && inputCountryName === "" && inputCityName === "") {
			context.Get200Last();
		}
		else{
			context.GetByCompositeSearch(inputHotelName, inputCityName, inputCountryName);
		}
		handleClear();
	};

	const handleClear = () => {
		setInputHotelName("");
		setInputCountryName("");
		setInputCityName("");
	};

	return (
		<div className="blockSearch">

			<div className="text"><h3>Пошук</h3></div>

			<div className="EditFormRow searchBarRow">
				<input
					name="searchBar"
					value={inputHotelName}
					placeholder="Введіть назву готелю"
					className="EditFormInput"
					onChange={(event) => setInputHotelName(event.target.value)}
				/>
				<input
					name="searchBar"
					value={inputCountryName}
					placeholder="Введіть назву країни"
					className="EditFormInput"
					onChange={(event) => setInputCountryName(event.target.value)}
				/>
				<input
					name="searchBar"
					value={inputCityName}
					placeholder="Введіть назву міста"
					className="EditFormInput"
					onChange={(event) => setInputCityName(event.target.value)}
				/>
			</div>
			<div className="searchbutton">
				<button type="submit" onClick={handleSearch}>
					Шукати
				</button>
				<button type="submit" onClick={handleClear}>
					Очистити
				</button>
				<hr />
			</div>
		</div>
	);
}
