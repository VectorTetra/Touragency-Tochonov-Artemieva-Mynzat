function CountrySearchBar (props) {
	const [quantity, setQuantity] = React.useState(props.tab.countries.length);
	const [countries, setCountries] = React.useState(props.tab.countries);

	const handleInput = (event) => {
		if	(event.target.value === "") {
			setCountries(props.tab.countries);
			setQuantity(props.tab.countries.length);
			return;
		}
		const filteredCountries = props.tab.countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()));
		setCountries(filteredCountries);
		setQuantity(filteredCountries.length);
	};

	return (
		<input className="countryEditFormInput" name="firstName" onInput={handleInput} />
	);
};