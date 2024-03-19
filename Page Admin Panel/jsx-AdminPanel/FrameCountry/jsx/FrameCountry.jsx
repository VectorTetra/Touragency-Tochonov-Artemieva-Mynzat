function FrameCountry(props){
	return (
		<div id="frameCountry">
			<FrameCountryHeader tab={props.tab} />
			<CountryEditForm />
			<CountryList tab={props.tab}/>
		</div>
	);
};