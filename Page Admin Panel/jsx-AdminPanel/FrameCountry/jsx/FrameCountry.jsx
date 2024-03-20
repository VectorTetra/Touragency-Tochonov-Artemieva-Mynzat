function FrameCountry(props){
	const searchRef = React.useRef();

	React.useEffect(() => {
		console.log("CountrySearchBar ref countries", searchRef.current ? searchRef.current.state.countries : undefined);
	}, [searchRef.current.state]);

	return (
		<div id="frameCountry">
			<FrameCountryHeader quantity={searchRef.current ? searchRef.current.state.quantity : 0} />
			<CountryEditForm />
			<CountrySearchBar tab={props.tab} searchRef={searchRef} />
			<CountryList countries={searchRef.current ? searchRef.current.state.countries : []} />
		</div>
	);
};
