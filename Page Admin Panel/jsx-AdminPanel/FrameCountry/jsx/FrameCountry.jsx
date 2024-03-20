function FrameCountry(props){
	const searchRef = React.useRef();

	useEffect(() => {
		// Do something with searchRef
	}, []);

	return (
		<div id="frameCountry">
			<FrameCountryHeader tab={props.tab} />
			<CountryEditForm />
			<CountrySearchBar tab={props.tab} searchRef={searchRef} />
			<CountryList tab={props.tab} />
		</div>
	);
};