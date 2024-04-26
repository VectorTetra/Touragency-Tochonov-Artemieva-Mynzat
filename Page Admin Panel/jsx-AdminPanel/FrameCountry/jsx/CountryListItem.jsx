function CountryListItem(props) {
	const context = React.useContext(window.FrameCountryContext);
	const prepareToEdit = (e) => 
	{
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetById', Id: props.country.id },
			success: function(data) {
				context.setDtoId(data[0].Id);
				context.setDtoName(data[0].Name);
				context.setDtoFlagUrl(data[0].FlagUrl);
				context.setDtoSettlementIds(data[0].SettlementIds);
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
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
				<button className="form-editbutton" data-id={props.country.id}>Змінити</button>
				<button className="form-clearbutton" data-id={props.country.id}>Видалити</button>
			</form>
		</div>
	);
}