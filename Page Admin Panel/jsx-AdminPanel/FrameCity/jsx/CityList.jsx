function CityList(props){
	return (
		<div id="cityList">
			{
				props.countries.map((country, index) => {
					return country.Cities.map((city, index) => {
						return <CityListItem key={crypto.randomUUID()} country={country} city={city}/>
					})
				})				
			}
		</div>
	);
};