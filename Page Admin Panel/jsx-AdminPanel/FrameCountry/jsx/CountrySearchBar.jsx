function CountrySearchBar(props) {
	const context = React.useContext(window.FrameCountryContext);
	const [localInput, setLocalInput] = React.useState(''); // Локальний стан для поля вводу

	const handleInput = (event) => {
		setLocalInput(event.target.value); // Оновлюємо локальний стан при вводі
	};

	React.useEffect(() => {
		context.setInputName(localInput); // Оновлюємо глобальний стан, коли локальний стан змінюється
		if (localInput === "") {
			context.Get200Last();
			return;
		}
		else {
			context.GetByName();
		}
	}, [localInput]); // Залежність від localInput, а не context.inputName

	return (
		<div className="EditFormRow searchBarRow">
			<input className="EditFormInput" name="searchBar" value={localInput} placeholder="Введіть назву країни" onInput={handleInput} />
		</div>
	);
};
