function CountryListItem(props) {
	return (
		<div className="countryListItem">
			<div className="countryListItemStatContainer">
				<img className="countryListItemFlagImg" src={props.country.flagUrl} alt={props.country.name} />
				<div className="countryListItemNameDiv">{props.country.name}</div>
			</div>
			<form action="post" className="countryListItemFormButtonBar">
				<input type="hidden" name="countryId" value={props.country.id} />
				<button type="submit" className="form-editbutton">Змінити</button>
				<button type="submit" className="form-clearbutton">Видалити</button>
			</form>
		</div>
	);
}