function CityEditForm(props) {
	console.log("CityEditForm countries", props.countries)
	return (
		<form name="countryEditForm" id="countryEditForm" style={{ border: '1px solid black', borderRadius: '5px' }}>
			<div className="EditFormRow">
				<label htmlFor="countrySelect">Країна:</label>
				<select className="EditFormInput" name="countrySelect" required>
					<option value="" disabled selected>Виберіть країну</option>
					{props.countries.map((country, index) => {
						return <option key={index} value={crypto.randomUUID()}>
							<div className="countryListItemStatContainer">
								<img className="countryListItemFlagImg" src={country.FlagUrl} alt={country.Name} />
								<div className="countryListItemNameDiv">{country.Name}</div>
							</div>
						</option>
					})}
				</select>
			</div>
			<div className="EditFormRow">
				<label htmlFor="cityNameInput">Назва міста:</label>
				<input className="EditFormInput" name="cityNameInput" required />
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<input id="userFormSubmit" className="form-savebutton" type="submit" value="Зберегти"/>
				<input id="userFormReset" className="form-clearbutton" type="reset" value="Очистити"/>
			</div>
		</form>
	);
};