function CityList(props){
	return (
		<div id="cityList">
			{
				props.countries.map((country, index) => {
					country.map((city, index) => {
						return <CityListItem key={crypto.randomUUID()} country={country} city={city}/>
					})
				})
			}
		</div>
	);
};