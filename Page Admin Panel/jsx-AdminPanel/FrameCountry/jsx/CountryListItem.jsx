function CountryListItem(props) {
	return (
		<div className="countryListItem">
			<div style={{"display": "flex"}}>
				<img className="countryListItemFlagImg" src={props.country.FlagUrl} alt={props.country.Name} />
				<div className="countryListItemNameDiv">{props.country.Name}</div>
			</div>
			<form action="post" className="countryListItemFormButtonBar">
				<input type="hidden" name="countryId" value={props.key} />
				<button type="submit" className="form-editbutton">Змінити</button>
				<button type="submit" className="form-clearbutton">Видалити</button>
			</form>
		</div>
	);
}