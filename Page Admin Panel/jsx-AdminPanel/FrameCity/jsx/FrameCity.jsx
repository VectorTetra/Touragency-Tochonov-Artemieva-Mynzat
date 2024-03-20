function FrameCity(props){
	const [quantity, setQuantity] = React.useState(props.tab.countries.length);
	const [countries, setCountries] = React.useState(props.tab.countries);
	const [cities, setCities] = React.useState(props.tab.countries.flatMap(country => country.Cities)); // Add this line

	return (
		<div id="frameCountry">
			<FrameCityHeader quantity={quantity} />
			<CityEditForm countries={countries}/>
			<CitySearchBar tab={props.tab} setQuantity={setQuantity} setCountries={setCountries} setCities={setCities} />
			<CityList countries={countries}/>
		</div>
	);
};