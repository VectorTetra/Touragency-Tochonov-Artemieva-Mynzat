function CountryListItem(props) {
	const context = React.useContext(window.FrameCountryContext);
	const PrepareToEdit = (e) => 
	{
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetById', Id: props.country.id },
			success: function(data) {
				$('#EditFormInputCountryId').val(data[0].Id);
				$('#EditFormInputCountryName').val(data[0].Name);
				$('#EditFormInputCountryUrlFlag').val(data[0].FlagUrl);
				context.setDtoSettlementIds(data[0].SettlementIds);
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const DeleteCountry = (e) => 
	{
		if(!confirm('Ви впевнені, що хочете видалити країну ' + props.country.name + ' ?')) return;
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country/' + props.country.id, // Замініть на ваш URL API
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
		<div className="countryListItem">
			<div className="countryListItemStatContainer">
				<img className="countryListItemFlagImg" src={props.country.flagUrl} alt={props.country.name} />
				<div className="countryListItemNameDiv">{props.country.name}</div>
			</div>
			<form action="post" className="countryListItemFormButtonBar">
				<input type="hidden" name="countryId" value={props.country.id} />
				<button className="form-editbutton" data-id={props.country.id} onClick={PrepareToEdit}>Змінити</button>
				<button className="form-clearbutton" data-id={props.country.id} onClick={DeleteCountry}>Видалити</button>
			</form>
		</div>
	);
}