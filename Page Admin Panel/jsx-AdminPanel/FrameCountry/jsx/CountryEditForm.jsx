function CountryEditForm(props) {
	const context = React.useContext(window.FrameCountryContext);
	const handleSubmit = (event) => {
		event.preventDefault();
		context.setDtoName(event.target.elements.countryNameInput.value);
		context.setDtoFlagUrl(event.target.elements.urlFlagInput.value);		
		if(id === 0) 
		{
			context.PostCountry();
		}
		else
		{
			context.PutCountry();
		}
		
	};
	return (
		<form name="countryEditForm" id="countryEditForm" style={{ border: '1px solid black', borderRadius: '5px' }} onSubmit={handleSubmit}>
			<input type="hidden" name="countryIdInput" value={context.dtoId}/>
			<div className="EditFormRow">
				<div>Назва країни:</div>
				<input className="EditFormInput" name="countryNameInput" required />
			</div>
			<div className="EditFormRow">
				<div>URL до зображення прапора країни:</div>
				<input className="EditFormInput" name="urlFlagInput" required />
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<input type="submit" id="userFormSubmit" className="form-savebutton" value="Зберегти"></input>
				<input type="reset" id="userFormReset" className="form-clearbutton" value="Очистити"></input>
			</div>
		</form>

	);
};