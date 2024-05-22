function CityListItem(props) {
	const context = React.useContext(window.FrameCityContext);
	const PrepareToEdit = async (e) => 
	{
		e.preventDefault();
		try {
			const response = await $.ajax({
				url: 'https://26.162.95.213:7100/api/Settlement', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'GetById', Id: props.city.id },
			});
			console.log("PrepareToEdit success data: ", response);
			context.setDtoId(response[0].id);
			context.setDtoName(response[0].name);
			context.setDtoCountryId(response[0].countryId);
			context.setDtoHotelIds(response[0].hotelIds);
			context.setDtoTourNameIds(response[0].tourNameIds);
		} catch (error) {
			console.error('Помилка при отриманні даних', error);
			alert(error.responseText);
		}
	}

	const DeleteCity = (e) => 
	{
		e.preventDefault();
		if(!confirm('Ви впевнені, що хочете видалити місто ' + props.city.name + ' ?')) return;
		$.ajax({
			url: 'https://26.162.95.213:7100/api/Settlement/' + props.city.id, // Замініть на ваш URL API
			method: 'DELETE',
			success: function(data) {
				context.Get200Last();
			},
			error: function(error) {
				console.error('Помилка при видаленні', error);
				alert(error.responseText);
			}
		});
	}
	return (
		<div className="cityListItem">
			<div className="cityListItemStatContainer">
				{/* <img className="countryListItemFlagImg" src={props.city.countryFlagUrl} alt={props.city.countryName} /> */}
				<React.Suspense fallback={<Loading width="40px" height="40px" />}>
					<SuspenseImage className="countryListItemFlagImg" src={props.city.countryFlagUrl} alt={props.city.countryName} />
				</React.Suspense>
				<div className="cityListItemStringStatContainer">
					<div className="cityListItemNameDiv">Країна: {props.city.countryName}</div>
					<div className="cityListItemNameDiv">Місто: {props.city.name}</div>
				</div>
			</div>
			<form action="post" className="cityListItemFormButtonBar">
				<input type="hidden" name="countryId" value={props.key} />
				<button className="form-editbutton-small" onClick={PrepareToEdit}></button>
				<button className="form-clearbutton-small" onClick={DeleteCity}></button>
			</form>
		</div>
	);
}