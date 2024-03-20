function CountrySearchBar(props) {
	const [quantity, setQuantity] = React.useState(props.tab.countries.length);
	const [countries, setCountries] = React.useState(props.tab.countries);
	React.useEffect(() => {
		console.log("CountrySearchBar countries", countries);
	}, [countries]);
	const handleInput = (event) => {
		console.log("CountrySearchBar countries", countries);
		if (event.target.value === "") {
			setCountries(props.tab.countries);
			setQuantity(props.tab.countries.length);
			return;
		}
		const filteredCountries = props.tab.countries.filter(country => country.Name.toLowerCase().includes(event.target.value.toLowerCase()));
		setCountries(filteredCountries);
		setQuantity(filteredCountries.length);
	};

	return (
		<div className="countryEditFormRow searchBarRow">
			<input className="countryEditFormInput" name="searchBar" value="" placeholder="Введіть назву країни" onInput={handleInput} />
		</div>
	);
};