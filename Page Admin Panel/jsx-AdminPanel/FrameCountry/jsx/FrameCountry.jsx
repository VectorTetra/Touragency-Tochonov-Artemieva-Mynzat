function FrameCountry(props){
	const searchRef = React.useRef();

	// React.useEffect(() => {
	// 	console.log("CountrySearchBar ref countries", searchRef.current ? searchRef.current.state.countries : undefined);
	// }, [searchRef.current.state]);

	return (
		<div id="frameCountry">
			<FrameCountryHeader quantity={searchRef.getQuantity() ? searchRef.getQuantity() : 0} />
			<CountryEditForm />
			<CountrySearchBar tab={props.tab} searchRef={searchRef} />
			<CountryList countries={searchRef.getCountries() ? searchRef.getCountries().countries : []} />
		</div>
	);
};
