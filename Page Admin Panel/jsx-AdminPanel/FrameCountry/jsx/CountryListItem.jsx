function CountryListItem(props) {
	const context = React.useContext(window.FrameCountryContext);
	const PrepareToEdit = async (e) => {
		e.preventDefault();
		try {
			const response = await $.ajax({
				url: 'https://26.162.95.213:7100/api/Country', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'GetById', Id: props.country.id },
			});
			console.log("PrepareToEdit success data: ", response);
			context.setDtoId(response[0].id);
			context.setDtoName(response[0].name);
			context.setDtoFlagUrl(response[0].flagUrl);
			context.setDtoSettlementIds(response[0].settlementIds);
			context.setDtoContinentId(response[0].continentId);
			context.setDtoTourNameIds(response[0].tourNameIds);
		} catch (error) {
			console.error('Помилка при отриманні даних', error);
			alert(error.responseText);
		}
	}

	const DeleteCountry = (e) => {
		e.preventDefault();
		if (!confirm('Ви впевнені, що хочете видалити країну ' + props.country.name + ' ?')) return;
		$.ajax({
			url: 'https://26.162.95.213:7100/api/Country/' + props.country.id, // Замініть на ваш URL API
			method: 'DELETE',
			success: function (data) {
				context.Get200Last();
			},
			error: function (error) {
				console.error('Помилка при видаленні', error);
				alert(error.responseText);
			}
		});
	}
	return (
		<div className="countryListItem">
			<div className="countryListItemStatContainer">
				{/* <img className="countryListItemFlagImg" src={props.country.flagUrl} alt={props.country.name} /> */}
				<React.Suspense fallback={<Loading width="40px" height="40px" />}>
					<SuspenseImage className="countryListItemFlagImg" src={props.country.flagUrl} alt={props.country.name} />
				</React.Suspense>
				<div className="cityListItemStringStatContainer">
					<div className="cityListItemNameDiv">Країна: {props.country.name}</div>
					<div className="cityListItemNameDiv">Континент: {props.country.continentName}</div>
				</div>
			</div>
			<form action="post" className="countryListItemFormButtonBar">
				<input type="hidden" name="countryId" value={props.country.id} />
				<button className="form-editbutton" data-id={props.country.id} onClick={PrepareToEdit}>Змінити</button>
				<button className="form-clearbutton" data-id={props.country.id} onClick={DeleteCountry}>Видалити</button>
			</form>
		</div>
	);
}