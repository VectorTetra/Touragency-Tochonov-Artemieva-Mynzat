function CitySearchBar(props) {
	const [inputCityValue, setInputCityValue] = React.useState("");
	const [inputCountryValue, setInputCountryValue] = React.useState("");
	const [quantity, setQuantity] = React.useState();
	const [countries, setCountries] = React.useState(props.tab.countries);
	const [cities, setCities] = React.useState([]);

	// Список всіх міст
	const allCities = [];
	React.useEffect(() => {
		allCities = props.tab.countries.flatMap(country => country.Cities);
    	setCities(allCities);
		const totalCities = allCities.length;
		setQuantity(totalCities);
	}, []);

	React.useEffect(() => {
		props.setQuantity(quantity);
		props.setCities(cities);
	}, [quantity, cities]);

	// const handleInput = (event) => {
	// 	if (inputCountryValue === "" && inputCityValue === "") {
	// 		allCities = props.tab.countries.flatMap(country => country.Cities);
	// 		setCountries(filteredCountries);
	// 		setCities(allCities);
	// 		setQuantity(allCities.length);
	// 		return;
	// 	}
	// 	let filteredCountries = props.tab.countries;
	// 	let filteredCities = allCities;
	// 	if (inputCountryValue !== "" && inputCityValue === "") {
	// 		filteredCountries = filteredCountries.filter(country => country.Name.toLowerCase().includes(inputCountryValue.toLowerCase()));
	// 		filteredCities = filteredCountries.flatMap(country => country.Cities);
	// 		setCountries(filteredCountries);
	// 		setCities(filteredCities);
	// 		setQuantity(filteredCities.length);
	// 		return;
	// 	}
	// 	if (inputCountryValue === "" && inputCityValue !== "") {
	// 		filteredCountries = props.tab.countries;
	// 		filteredCities = allCities.filter(city => city.Name.toLowerCase().includes(inputCityValue.toLowerCase()));
	// 		setCountries(filteredCountries);
	// 		setCities(filteredCities);
	// 		setQuantity(filteredCities.length);
	// 		return;
	// 	}
	// 	if (inputCountryValue !== "" && inputCityValue !== "") {
	// 		filteredCountries = filteredCountries.filter(country => country.Name.toLowerCase().includes(inputCountryValue.toLowerCase()));
	// 		filteredCities = filteredCountries.flatMap(country => country.Cities);
	// 		filteredCities = filteredCities.filter(city => city.Name.toLowerCase().includes(inputCityValue.toLowerCase()));
	// 		setCountries(filteredCountries);
	// 		setCities(filteredCities);
	// 		setQuantity(filteredCities.length);
	// 		return;
	// 	}
	// };

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
	
		setCountries(filteredCountries);
		setCities(filteredCities);
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