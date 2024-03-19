function CountryListItem(props) {
  return (
	<div className="countryListItem">
		<img className="countryListItemFlagImg" src={props.country.FlagUrl} alt={props.country.Name} />
		<div className="countryListItemNameDiv">{props.country.Name}</div>
	</div>
  );
}