function HotelSearch(props) {
	const [inputHotelName, setInputHotelName] = React.useState("");
	const [inputCountryName, setInputCountryName] = React.useState("");
	const [inputCityName, setInputCityName] = React.useState("");
	const [hotel, setHotel] = React.useState(props.hotel);
	const [quantity, setQuantity] = React.useState(props.hotel.length);

	React.useEffect(() => {
		props.setQuantity(quantity);
		props.setHotel(hotel);
	}, [quantity, hotel]);

	const handleSearch = () => {
		const filteredHotel = props.hotel.filter(hotel =>
			hotel.HotelName.toLowerCase().includes(inputHotelName.toLowerCase()) &&
			hotel.CountryName.toLowerCase().includes(inputCountryName.toLowerCase()) &&
			hotel.CityName.toLowerCase().includes(inputCityName.toLowerCase())
		);
		setHotel(filteredHotel);
		setQuantity(filteredHotel.length);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	const handleClear = () => {
		setInputHotelName("");
		setInputCountryName("");
		setInputCityName("");
		setHotel(props.hotel);
		setQuantity(props.hotel.length);
	};

	return (
		<div className="blockSearch">

			<div className="text"><h3>Пошук</h3></div>

			<div className="search">
				<div>
					<input
						name="searchBar"
						value={inputHotelName}
						placeholder="Введіть назву готелю"
						onChange={(event) => setInputHotelName(event.target.value)}
						onKeyDown={handleKeyDown}
					/>
			</div>
			<div>
					<input
						name="searchBar"
						value={inputCountryName}
						placeholder="Введіть назву країни"
						onChange={(event) => setInputCountryName(event.target.value)}
						onKeyDown={handleKeyDown}
					/>
				
			</div>
			<div>
				
					<input
						name="searchBar"
						value={inputCityName}
						placeholder="Введіть назву міста"
						onChange={(event) => setInputCityName(event.target.value)}
						onKeyDown={handleKeyDown}
					/>
			</div>
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
