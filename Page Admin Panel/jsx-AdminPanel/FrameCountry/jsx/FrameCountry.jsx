function FrameCountry(props){
	const [quantity, setQuantity] = React.useState(props.tab.countries.length);
	const [countries, setCountries] = React.useState(props.tab.countries);

	return (
		<div id="frameCountry">
			<FrameCountryHeader quantity={quantity} />
			<CountryEditForm />
			<CountrySearchBar tab={props.tab} setQuantity={setQuantity} setCountries={setCountries} />
			<CountryList countries={countries} />
		</div>
	);
};
