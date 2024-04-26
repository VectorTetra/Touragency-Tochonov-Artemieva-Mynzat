function CountrySearchBar(props) {
	const context = React.useContext(window.FrameCountryContext);
	const [inputValue, setInputValue] = React.useState("");

	const handleInput = (event) => {
		setInputValue(event.target.value);
		if (event.target.value === "") {
			context.Get200Last();
			return;
		}
		else {
			context.setDtoName(event.target.value);
			context.GetByName();
		}
	};

	return (
		<div className="EditFormRow searchBarRow">
			<input className="EditFormInput" name="searchBar" value={inputValue} placeholder="Введіть назву країни" onInput={handleInput} />
		</div>
	);
};
