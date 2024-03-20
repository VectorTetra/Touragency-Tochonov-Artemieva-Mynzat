function CitySearchBar(props) {
	const [inputCityValue, setInputCityValue] = React.useState("");
	const [inputCountryValue, setInputCountryValue] = React.useState("");
	const [quantity, setQuantity] = React.useState();

	// Список всіх міст
	const allCities = props.tab.countries.flatMap(country => country.Cities);
	React.useEffect(() => {
    	props.setCities(allCities);
		const totalCities = allCities.length;
		setQuantity(totalCities);
	}, []);

	React.useEffect(() => {
		props.setQuantity(quantity);
	}, [quantity]);

	const handleInput = (event) => {
		let filteredCountries = props.tab.countries;
		let filteredCities = allCities;
	
		if (inputCountryValue !== "") {
			filteredCountries = filteredCountries.filter(country => country.Name.toLowerCase().includes(inputCountryValue.toLowerCase()));
			filteredCities = filteredCountries.flatMap(country => country.Cities);
		}
	
		if (inputCityValue !== "") {
			filteredCities = filteredCities.filter(city => city.Name.toLowerCase().includes(inputCityValue.toLowerCase()));
		}
	
		props.setCities(filteredCities);
		setQuantity(filteredCities.length);
	};

	
	const handleInputCountryValue = (event) => 
	{
		setInputCountryValue(event.target.value);
	}

	const handleInputCityValue = (event) =>{
		setInputCityValue(event.target.value);
	}
	return (
		<div className="countryEditFormRow searchBarRow">
			<input className="countryEditFormInput" name="country" value={inputCountryValue} onInput={handleInputCountryValue} placeholder="Введіть назву країни" />
			<input className="countryEditFormInput" name="city" value={inputCityValue} onInput={handleInputCityValue} placeholder="Введіть назву міста" />
			<button className="form-savebutton" name="buttonSearchCity" value="Пошук" onClick={handleInput} />
		</div>
	);
};
