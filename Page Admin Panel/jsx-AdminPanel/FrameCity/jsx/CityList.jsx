function CityList(props){
	console.log("CityList cities", props.cities)
	return (
		<div id="cityList">
			{
				props.cities.map((city, index) => {
					return <CityListItem key={index} city={city}/>
				})
			}
		</div>
	);
};