function FrameCity(props){
	const [quantity, setQuantity] = React.useState(props.tab.countries.length);
	const [countries, setCountries] = React.useState(props.tab.countries);

	return (
		<div id="frameCountry">
			<FrameCityHeader quantity={quantity} />
			<CityEditForm countries={countries}/>
			<CitySearchBar tab={props.tab} setQuantity={setQuantity} setCountries={setCountries} />
			<CityList countries={countries} />
		</div>
	);
};
