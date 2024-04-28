function CountryEditForm(props) {
	const context = React.useContext(window.FrameCountryContext);
	const [countryName, setCountryName] = React.useState(''); 
	const [flagUrl, setFlagUrl] = React.useState(''); 
	React.useEffect(() => {
		setCountryName(context.dtoName);
	}, [context.dtoName]);

	React.useEffect(() => {
		setFlagUrl(context.dtoFlagUrl);
	}, [context.dtoFlagUrl]);

	const handleCountryNameChange = (event) => {
		setCountryName(event.target.value);
	};

	const handleFlagUrlChange = (event) => {
		setFlagUrl(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();	
		if(context.dtoId === 0) 
		{
			context.PostCountry(countryName, flagUrl);
		}
		else
		{
			context.PutCountry(countryName,flagUrl);
		}
		
	};

	return (
		<form name="countryEditForm" id="countryEditForm" style={{ border: '1px solid black', borderRadius: '5px' }} onSubmit={handleSubmit}>
			<input id="EditFormInputCountryId" type="hidden" name="countryIdInput" value={context.dtoId}/>
			<div className="EditFormRow">
				<div>Назва країни:</div>
				<input id="EditFormInputCountryName" className="EditFormInput" name="countryNameInput" value={countryName} required onChange={handleCountryNameChange} />
			</div>
			<div className="EditFormRow">
				<div>URL до зображення прапора країни:</div>
				<input id="EditFormInputCountryUrlFlag" className="EditFormInput" name="urlFlagInput" value={flagUrl} required onChange={handleFlagUrlChange} />
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<input type="submit" id="userFormSubmit" className="form-savebutton" value="Зберегти"></input>
				<input type="reset" id="userFormReset" className="form-clearbutton" value="Очистити"></input>
			</div>
		</form>

	);
};
