function CountrySearchBar(props) {
	const [inputValue, setInputValue] = React.useState("");
	const [quantity, setQuantity] = React.useState(props.countries.length);
	const [countries, setCountries] = React.useState(props.countries);

	React.useEffect(() => {
		props.setQuantity(quantity);
		props.setCountries(countries);
	}, [quantity, countries]);

	const handleInput = (event) => {
		setInputValue(event.target.value);
		if (event.target.value === "") {
			setCountries(props.countries);
			setQuantity(props.countries.length);
			return;
		}
		const filteredCountries = props.countries.filter(country => country.Name.toLowerCase().includes(event.target.value.toLowerCase()));
		setCountries(filteredCountries);
		setQuantity(filteredCountries.length);
	};

	return (
		<div className="EditFormRow searchBarRow">
			<input className="EditFormInput" name="searchBar" value={inputValue} placeholder="Введіть назву країни" onInput={handleInput} />
		</div>
	);
};
