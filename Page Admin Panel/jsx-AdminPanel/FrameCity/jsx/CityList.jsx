function CityList(props){
	console.log("CityList cities", props.cities)
	return (
		<div id="cityList">
			{
				props.cities?.map((city, index) => {
					return <CityListItem key={crypto.randomUUID()} country={props.countries.find(country => country.Name === city.CountryName)} city={city}/>
				})
			}
		</div>
	);
};