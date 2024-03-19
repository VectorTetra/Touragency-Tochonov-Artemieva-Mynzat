function CountryList(props){
	return (
		<div id="countryList">
			{
				props.tab.countries.map((country, index) => {
					return <CountryListItem key={index} country={country}/>
				})
			}
		</div>
	);
};