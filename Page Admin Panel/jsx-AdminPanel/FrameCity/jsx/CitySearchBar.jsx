function CitySearchBar(props) {
	const context = React.useContext(window.FrameCityContext);
	const [CountryNameInput, setCountryNameInput] = React.useState(''); // Локальний стан для поля вводу
	const [SettlementNameInput, setSettlementNameInput] = React.useState(''); // Локальний стан для поля вводу
	
	const handleInput = (event) => {
		setCountryNameInput(event.target.value); // Оновлюємо локальний стан при вводі
	};
	const handleSettlementInput = (event) => {
		setSettlementNameInput(event.target.value); // Оновлюємо локальний стан при вводі
	};

	const onClickHandler = () => {
		if (CountryNameInput === "" && SettlementNameInput === "") {
			context.Get200Last();
		}
		else 
		{
			context.GetByCompositeSearch(SettlementNameInput,CountryNameInput);
		}
	};

	return (
		<div className="EditFormRow searchBarRow">
			<input className="EditFormInput" name="searchBar" value={SettlementNameInput} placeholder="Введіть назву міста" onChange={handleSettlementInput} />
			<input className="EditFormInput" name="searchBar" value={CountryNameInput} placeholder="Введіть назву країни" onChange={handleInput} />
			<button className="buttonSearchCity" name="buttonSearchCity" onClick={onClickHandler}>Пошук</button>
		</div>
	);
};
