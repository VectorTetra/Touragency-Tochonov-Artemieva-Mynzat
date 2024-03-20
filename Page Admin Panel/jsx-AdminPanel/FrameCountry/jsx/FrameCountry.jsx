function FrameCountry(props){
	const searchRef = React.useRef();

	// React.useEffect(() => {
	// 	// Do something with searchRef
	// }, []);

	return (
		<div id="frameCountry">
			<FrameCountryHeader quantity={searchRef.current ? searchRef.current.state.quantity : 0} />
			<CountryEditForm />
			<CountrySearchBar tab={props.tab} searchRef={searchRef} />
			<CountryList countries={searchRef.current ? searchRef.current.state.countries : []} />
		</div>
	);
};
