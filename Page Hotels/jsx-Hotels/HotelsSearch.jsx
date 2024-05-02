function HotelsSearch(props) {
    const [inputValue, setInputValue] = React.useState("");
    const [tours, setTours] = React.useState(props.tours);
	const [quantity, setQuantity] = React.useState(props.tours.length);

	React.useEffect(() => {
		props.setQuantity(quantity);
		props.setTours(tours);
	}, [quantity, tours]);

	const handleInput = (event) => {
		setInputValue(event.target.value);
		if (event.target.value === "") {
			setTours(props.tours);
			setQuantity(props.tours.length);
			return;
		}
		const filteredTours = props.tours.filter(tour => tour.tourName.toLowerCase().includes(event.target.value.toLowerCase()));
		setTours(filteredTours);
		setQuantity(filteredTours.length);
	};

	return (
		<div className="search">
			<input className="countryEditFormInput" name="searchBar" 
			value={inputValue} placeholder="Введіть назву туру" onInput={handleInput} />
		</div>
	);
    
}