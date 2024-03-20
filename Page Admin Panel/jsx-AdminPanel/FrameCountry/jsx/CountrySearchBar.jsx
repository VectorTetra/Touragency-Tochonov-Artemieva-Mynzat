function CountrySearchBar(props) {
	React.useEffect(() => {
		props.setQuantity(props.tab.countries.length);
		props.setCountries(props.tab.countries);
	}, [props.tab]);

	const handleInput = (event) => {
		if (event.target.value === "") {
			props.setCountries(props.tab.countries);
			props.setQuantity(props.tab.countries.length);
			return;
		}
		const filteredCountries = props.tab.countries.filter(country => country.Name.toLowerCase().includes(event.target.value.toLowerCase()));
		props.setCountries(filteredCountries);
		props.setQuantity(filteredCountries.length);
	};

	return (
		<div className="countryEditFormRow searchBarRow">
			<input className="countryEditFormInput" name="searchBar" value="" placeholder="Введіть назву країни" onInput={handleInput} />
		</div>
	);
};