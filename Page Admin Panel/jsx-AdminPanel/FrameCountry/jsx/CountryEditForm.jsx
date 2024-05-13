function CountryEditForm(props) {
	const context = React.useContext(window.FrameCountryContext);
	const [countryName, setCountryName] = React.useState(''); 
	const [flagUrl, setFlagUrl] = React.useState(''); 
	const [continentId, setContinentId] = React.useState(''); // Додано новий стан
	const [continents, setContinents] = React.useState([]);
	React.useEffect(() => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Continent', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			statusCode: {
				200: function(data) {
					setContinents(data);
				},
				204: function() {
					setContinents([]);
				}
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}, []);

	React.useEffect(() => {
		setCountryName(context.dtoName);
	}, [context.dtoName]);

	React.useEffect(() => {
		setFlagUrl(context.dtoFlagUrl);
	}, [context.dtoFlagUrl]);

	React.useEffect(() => {
		setContinentId(context.dtoContinentId);
	}, [context.dtoContinentId]);

	const handleCountryNameChange = (event) => {
		setCountryName(event.target.value);
	};

	const handleContinentChange = (event) => {
		setContinentId(event.target.value); // Обробник зміни для нового стану
	};

	const handleFlagUrlChange = (event) => {
		setFlagUrl(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();	
		if(context.dtoId === 0) 
		{
			context.PostCountry(countryName, flagUrl, continentId); // Додано новий параметр
		}
		else
		{
			context.PutCountry(countryName, flagUrl, continentId); // Додано новий параметр
		}
		handleReset();
		
	};
	const handleReset = (event) => {
		context.setDtoId(0);
		context.setDtoName('');
		context.setDtoFlagUrl('');
		context.setDtoSettlementIds([]);
		context.setDtoContinentId(0);
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
			<div className="EditFormRow">
				<div>Континент:</div>
				<select id="EditFormInputContinentId" className="EditFormInput" name="continentInput" value={continentId} required onChange={handleContinentChange} >
					<option value="0" disabled hidden>Виберіть континент</option>
					{continents.map((continent) => <option key={continent.id} value={continent.id}>{continent.name}</option>)}
				</select>
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<input type="submit" id="userFormSubmit" className="form-savebutton" value="Зберегти"></input>
				<button id="userFormReset" className="form-clearbutton" onClick={handleReset}>Очистити</button>
			</div>
		</form>

	);
};
