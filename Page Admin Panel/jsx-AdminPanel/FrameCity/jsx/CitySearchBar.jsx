function CitySearchBar(props) {
	const [inputCityValue, setInputCityValue] = React.useState("");
	const [inputCountryValue, setInputCountryValue] = React.useState("");
	const [quantity, setQuantity] = React.useState();
	const [cities, setCities] = React.useState();
	const [countries, setCountries] = React.useState();

	// Список всіх міст
	const allCities = props.tab.countries.flatMap(country => country.Cities);
	React.useEffect(() => {
    	props.setCities(allCities);
		const totalCities = allCities.length;
		props.setQuantity(totalCities);
	}, []);

	React.useEffect(() => {
		props.setQuantity(quantity);
		props.setCities(cities);
		props.setCountries(countries);
	}, [quantity, cities, countries]);

	const handleInput = (event) => {
		event.preventDefault();
		let filteredCountries = props.tab.countries;
		let filteredCities = allCities;
	
		if (inputCountryValue !== "") {
			filteredCountries = filteredCountries.filter(country => country.Name.toLowerCase().includes(inputCountryValue.toLowerCase()));
			filteredCities = filteredCountries.flatMap(country => country.Cities);
		}
	
		if (inputCityValue !== "") {
			filteredCities = filteredCities.filter(city => city.Name.toLowerCase().includes(inputCityValue.toLowerCase()));
		}
		props.setCountries(filteredCountries);
		props.setCities(filteredCities);
		props.setQuantity(filteredCities.length);
	};

	
	const handleInputCountryValue = (event) => 
	{
		setInputCountryValue(event.target.value);
	}

	const handleInputCityValue = (event) =>{
		setInputCityValue(event.target.value);
	}
	return (
		<form className="countryEditFormRow searchBarRow" method="post">
			<input className="countryEditFormInput" name="country" value={inputCountryValue} onInput={handleInputCountryValue} placeholder="Введіть назву країни" />
			<input className="countryEditFormInput" name="city" value={inputCityValue} onInput={handleInputCityValue} placeholder="Введіть назву міста" />
			<input type="submit" className="form-savebutton" name="buttonSearchCity" value="Пошук" onClick={handleInput} />
		</form>
	);
};
