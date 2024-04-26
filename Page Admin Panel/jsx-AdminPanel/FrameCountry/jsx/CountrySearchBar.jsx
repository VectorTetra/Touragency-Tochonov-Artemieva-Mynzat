function CountrySearchBar(props) {
	const context = React.useContext(window.FrameCountryContext);

	const handleInput = (event) => {
		context.setInputName(event.target.value);
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
			<input className="EditFormInput" name="searchBar" value={context.inputName} placeholder="Введіть назву країни" onInput={handleInput} />
		</div>
	);
};
