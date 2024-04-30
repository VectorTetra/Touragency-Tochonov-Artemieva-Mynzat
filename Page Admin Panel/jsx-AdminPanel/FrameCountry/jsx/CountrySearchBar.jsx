function CountrySearchBar(props) {
	const context = React.useContext(window.FrameCountryContext);
	const [CountryNameInput, setCountryNameInput] = React.useState(''); // Локальний стан для поля вводу
	const [ContinentNameInput, setContinentNameInput] = React.useState(''); // Локальний стан для поля вводу
	
	const handleInput = (event) => {
		setCountryNameInput(event.target.value); // Оновлюємо локальний стан при вводі
	};
	const handleContinentInput = (event) => {
		setContinentNameInput(event.target.value); // Оновлюємо локальний стан при вводі
	};

	const onClickHandler = () => {
		if (CountryNameInput === "" && ContinentNameInput === "") {
			context.Get200Last();
		}
		else 
		{
			context.GetByCompositeSearch(CountryNameInput, ContinentNameInput);
		}
	};

	return (
		<div className="EditFormRow searchBarRow">
			<input className="EditFormInput" name="searchBar" value={CountryNameInput} placeholder="Введіть назву країни" onChange={handleInput} />
			<input className="EditFormInput" name="searchBar" value={ContinentNameInput} placeholder="Введіть назву континенту" onChange={handleContinentInput} />
			<button className="buttonSearchCity" name="buttonSearchCity" onClick={onClickHandler}>Пошук</button>
		</div>
	);
};
