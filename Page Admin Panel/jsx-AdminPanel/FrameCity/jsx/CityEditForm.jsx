function CityEditForm(props) {
	return (

		<form name="countryEditForm" id="countryEditForm" style={{ border: '1px solid black', borderRadius: '5px' }}>
			<div className="countryEditFormRow">
				<label htmlFor="countrySelect">Країна:</label>
				<select className="cityEditFormInput" name="countrySelect" required>
					<option value="" disabled selected>Виберіть країну</option>
					{props.countries.map((country, index) => {
						return <option key={index} value={country.id}>
							<div className="countryListItemStatContainer">
								<img className="countryListItemFlagImg" src={props.country.FlagUrl} alt={props.country.Name} />
								<div className="countryListItemNameDiv">{props.country.Name}</div>
							</div>
						</option>
					})}
				</select>
			</div>
			<div className="countryEditFormRow">
				<label htmlFor="cityNameInput">Назва міста:</label>
				<input className="cityEditFormInput" name="cityNameInput" required />
			</div>
			<div className="countryEditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<a id="userFormSubmit" className="form-savebutton">Зберегти</a>
				<a id="userFormReset" className="form-clearbutton">Очистити</a>
			</div>
		</form>

	);
};