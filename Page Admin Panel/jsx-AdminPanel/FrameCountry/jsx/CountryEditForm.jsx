function CountryEditForm(props) {
	return (

		<form name="countryEditForm" id="countryEditForm" style={{ border: '1px solid black', borderRadius: '5px' }}>
			<div className="countryEditFormRow">
				<label htmlFor="firstName">Назва країни:</label>
				<input className="form-control" name="firstName" required />
			</div>
			<div className="countryEditFormRow">
				<label htmlFor="login">URL до зображення прапора країни:</label>
				<input className="form-control" name="login" required />
			</div>
			<div className="countryEditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<a id="userFormSubmit" className="form-savebutton">Зберегти</a>
				<a id="userFormReset" className="form-clearbutton">Очистити</a>
			</div>
		</form>

	);
};