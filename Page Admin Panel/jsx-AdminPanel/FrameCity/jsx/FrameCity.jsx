function FrameCity(props){
	const allCities = props.tab.countries.flatMap(country => country.Cities);
	const [quantity, setQuantity] = React.useState(allCities.length);
	const [countries, setCountries] = React.useState(props.tab.countries);
	const [cities, setCities] = React.useState(allCities);

	return (
		<div id="frameCountry">
			<FrameCityHeader quantity={quantity} />
			<CityEditForm countries={countries}/>
			<CitySearchBar tab={props.tab} setQuantity={setQuantity} setCountries={setCountries} setCities={setCities} />
			<CityList countries={countries}/>
		</div>
	);
};