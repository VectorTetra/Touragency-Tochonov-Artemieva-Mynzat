function CountryEditForm(props) {
	return (

		<form name="countryEditForm" id="countryEditForm" style={{ border: '1px solid black', borderRadius: '5px' }}>
			<div className="EditFormRow">
				<label htmlFor="countryNameInput">Назва країни:</label>
				<input className="EditFormInput" name="countryNameInput" required />
			</div>
			<div className="EditFormRow">
				<label htmlFor="urlFlagInput">URL до зображення прапора країни:</label>
				<input className="EditFormInput" name="urlFlagInput" required />
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<a id="userFormSubmit" className="form-savebutton">Зберегти</a>
				<a id="userFormReset" className="form-clearbutton">Очистити</a>
			</div>
		</form>

	);
};