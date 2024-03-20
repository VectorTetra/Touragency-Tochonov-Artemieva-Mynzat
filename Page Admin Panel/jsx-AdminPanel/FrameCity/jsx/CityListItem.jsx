function CityListItem(props) {
	return (
		<div className="cityListItem">
			<div className="cityListItemStatContainer">
				<img className="countryListItemFlagImg" src={props.country.FlagUrl} alt={props.country.Name} />
				<div className="cityListItemStringStatContainer">
					<div className="countryListItemNameDiv">Країна: {props.country.Name}</div>
					<div className="countryListItemNameDiv">Місто: {props.city.Name}</div>
				</div>
			</div>
			<form action="post" className="countryListItemFormButtonBar">
				<input type="hidden" name="countryId" value={props.key} />
				<button type="submit" className="form-editbutton-small"></button>
				<button type="submit" className="form-clearbutton-small"></button>
			</form>
		</div>
	);
}