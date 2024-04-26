function CountrySearchBar(props) {
	const context = React.useContext(window.FrameCountryContext);

	const handleInput = (event) => {
		context.setInputName(event.target.value);
	};

	React.useEffect(() => {
		if (context.inputName === "") {
			context.Get200Last();
			return;
		}
		else {
			context.GetByName();
		}
	}, [context.inputName]);
	return (
		<div className="EditFormRow searchBarRow">
			<input className="EditFormInput" name="searchBar" value={context.inputName} placeholder="Введіть назву країни"/>
			<input type="submit" className="buttonSearchCity" name="buttonSearchCity" value="Пошук" onClick={handleInput} />
		</div>
	);
};
