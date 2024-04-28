function CountrySearchBar(props) {
	const context = React.useContext(window.FrameCountryContext);
	const [localInput, setLocalInput] = React.useState(''); // Локальний стан для поля вводу

	const handleInput = (event) => {
		setLocalInput(event.target.value); // Оновлюємо локальний стан при вводі
	};

	const onClickHandler = () => {
		if (localInput !== "") {
			context.GetByName(localInput);
		}
		else 
		{
			context.Get200Last();
		}
	};

	return (
		<div className="EditFormRow searchBarRow">
			<input className="EditFormInput" name="searchBar" value={localInput} placeholder="Введіть назву країни" onChange={handleInput} />
			<button className="buttonSearchCity" name="buttonSearchCity" onClick={onClickHandler}>Пошук</button>
		</div>
	);
};
