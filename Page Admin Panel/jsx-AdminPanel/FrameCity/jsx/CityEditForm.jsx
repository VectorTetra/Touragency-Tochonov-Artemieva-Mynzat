function CityEditForm(props) {
	const context = React.useContext(window.FrameCityContext);
	const [settlementName, setSettlementName] = React.useState('');
	const [countryId, setCountryId] = React.useState('');
	const [countries, setCountries] = React.useState([]);

	React.useEffect(() => {
		$.ajax({
			url: 'https://26.162.95.213:7100/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			statusCode: {
				200: function (data) {
					setCountries(data);
				},
				204: function () {
					setCountries([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}, []);

	React.useEffect(() => {
		setSettlementName(context.dtoName);
	}, [context.dtoName]);

	React.useEffect(() => {
		setCountryId(context.dtoCountryId);
	}, [context.dtoCountryId]);

	const handleSettlementNameChange = (event) => {
		setSettlementName(event.target.value);
	};

	const handleCountryChange = (event) => {
		setCountryId(event.target.value); // Обробник зміни для нового стану
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (context.dtoId === 0) {
			context.PostSettlement(settlementName, countryId); // Додано новий параметр
		}
		else {
			context.PutSettlement(settlementName, countryId); // Додано новий параметр
		}
		handleReset(event);
	};
	const handleReset = (event) => {
		event.preventDefault();
		context.setDtoId(0);
		context.setDtoName('');
		context.setDtoHotelIds([]);
		context.setDtoTourNameIds([]);
		context.setDtoCountryId(0);
	};
	return (
		<form name="countryEditForm" id="countryEditForm" style={{ border: '1px solid black', borderRadius: '5px' }} onSubmit={handleSubmit}>
			<div className="EditFormRow">
				<div>Країна:</div>
				<select className="EditFormInput" name="countrySelect" value={countryId} onChange={handleCountryChange} required>
					<option value="0" disabled selected>Виберіть країну</option>
					{countries.map((country, index) => {
						return <option key={country} value={country.id}>
							<div className="countryListItemStatContainer">
								<div className="countryListItemNameDiv">{country.name}</div>
							</div>
						</option>
					})}
				</select>
			</div>
			<div className="EditFormRow">
				<div>Назва міста:</div>
				<input className="EditFormInput" name="cityNameInput" value={settlementName} onChange={handleSettlementNameChange} required />
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<input type="submit" id="userFormSubmit" className="form-savebutton" value="Зберегти" />
				<button id="userFormReset" className="form-clearbutton" onClick={handleReset}>Очистити</button>
			</div>
		</form>
	);
};