function HotelsSearch(props) {
    let context = React.useContext(window.HotelPageContext);
    const [inputValue, setInputValue] = React.useState("");

	const handleInput = () => {
		if (inputValue === "" || inputValue === undefined || inputValue === null) {
			context.Get10TourNames();
			return;
		}
		else{
			context.GetByTourName(inputValue);
		}
		
	};
	const handleInputChange = (event) => {
		switch (event.target.name) {
			case 'searchBar':
				setInputValue(event.target.value);
				break;
			default:
				break;
		}
	}
	return (
		<div className="search EditFormRow">
			<input className="countryEditFormInput" name="searchBar" 
			value={inputValue} onChange={handleInputChange} placeholder="Введіть назву туру"/>
			<button className="buttonSearchCity" style={{width: "auto", marginTop:"20px"}} onClick={handleInput}>Пошук</button>
		</div>
	);
    
}