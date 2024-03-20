function CityList(props){
	return (
		<div id="cityList">
			{
				console.log(props.countries)
			}
			{
				props.countries.map((country, index) => {
					country.Cities.map((city, index) => {
						return <CityListItem key={crypto.randomUUID()} country={country} city={city}/>
					})
				})
			}
		</div>
	);
};