function CountryEditForm(props) {
	const context = React.useContext(window.FrameCountryContext);
	const countryNameRef = React.useRef();
	const flagUrlRef = React.useRef();

	React.useEffect(() => {
		countryNameRef.current.focus();
	}, [context.dtoName]);

	React.useEffect(() => {
		flagUrlRef.current.focus();
	}, [context.dtoFlagUrl]);

	const handleCountryNameChange = (event) => {
		context.setDtoName(event.target.value);
	};

	const handleFlagUrlChange = (event) => {
		context.setDtoFlagUrl(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();	
		if(context.dtoId === 0) 
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
			<input id="EditFormInputCountryId" type="hidden" name="countryIdInput" value={context.dtoId}/>
			<div className="EditFormRow">
				<div>Назва країни:</div>
				<input ref={countryNameRef} id="EditFormInputCountryName" className="EditFormInput" name="countryNameInput" value={context.dtoName} required onChange={handleCountryNameChange} />
			</div>
			<div className="EditFormRow">
				<div>URL до зображення прапора країни:</div>
				<input ref={flagUrlRef} id="EditFormInputCountryUrlFlag" className="EditFormInput" name="urlFlagInput" value={context.dtoFlagUrl} required onChange={handleFlagUrlChange} />
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<input type="submit" id="userFormSubmit" className="form-savebutton" value="Зберегти"></input>
				<input type="reset" id="userFormReset" className="form-clearbutton" value="Очистити"></input>
			</div>
		</form>

	);
};
