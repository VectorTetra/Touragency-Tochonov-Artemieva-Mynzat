function HotelEditForm(props) {
	const context = React.useContext(window.FrameHotelContext);
	const [selectedFoodServices, setSelectedFoodServices] = React.useState([]);
	const [selectedOtherServices, setSelectedOtherServices] = React.useState([]);
	const [selectedBedConfigurations, setSelectedBedConfigurations] = React.useState([]);
	const [selectedCountryId, setSelectedCountryId] = React.useState(0);
	const [selectedCityId, setSelectedCityId] = React.useState(0);
	const [availableCities, setAvailableCities] = React.useState([]);
	const [availableCountries, setAvailableCountries] = React.useState([]);
	const [hotelName, setHotelName] = React.useState('');
	const [hotelDescription, setHotelDescription] = React.useState('');
	const [hotelStars, setHotelStars] = React.useState(null);
	const [hotelId, setHotelId] = React.useState(0);

	const handleChangeBedConfigurations = (event) => {
		const values = Array.from(event.target.selectedOptions, option => Number(option.value));
		setSelectedBedConfigurations(values);
	};
	const handleChangeFoodServices = (event) => {
		const values = Array.from(event.target.selectedOptions, option => Number(option.value));
		setSelectedFoodServices(values);
	};
	const handleChangeOtherServices = (event) => {
		const values = Array.from(event.target.selectedOptions, option => Number(option.value));
		setSelectedOtherServices(values);
	};
	React.useEffect(() => {
		if (selectedCountryId === 0) {
			setSelectedCityId(0);
		}
		else {
			$.ajax({
				url: 'https://26.162.95.213:7099/api/Settlement', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'GetByCountryId', CountryId: selectedCountryId },
				statusCode: {
					200: function (data) {
						setAvailableCities(data);
					},
					204: function () {
						setAvailableCities([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}

	}, [selectedCountryId]);
	React.useEffect(() => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			statusCode: {
				200: function (data) {
					setAvailableCountries(data);
				},
				204: function () {
					setAvailableCountries([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}, []);
	React.useEffect(() => {
		setHotelId(context.dtoId);
	}, [context.dtoId]);

	React.useEffect(() => {
		setHotelName(context.dtoName);
	}, [context.dtoName]);

	React.useEffect(() => {
		setHotelStars(context.dtoStars);
		console.log(context.dtoStars);
	}, [context.dtoStars]);
	React.useEffect(() => {
		setHotelDescription(context.dtoDescription);
	}, [context.dtoDescription]);

	React.useEffect(() => {
		setSelectedCountryId(context.dtoCountryId);
	}, [context.dtoCountryId]);

	React.useEffect(() => {
		setSelectedCityId(context.dtoSettlementId);
	}, [context.dtoSettlementId]);

	React.useEffect(() => {
		const values = Array.from(context.dtoHotelFoodServicesIds, o => o.toString());
		setSelectedFoodServices(values);
	}, [context.dtoHotelFoodServicesIds]);

	React.useEffect(() => {

		const values = Array.from(context.dtoHotelOtherServicesIds, o => o.toString());
		setSelectedOtherServices(values);
	}, [context.dtoHotelOtherServicesIds]);

	React.useEffect(() => {
		const values = Array.from(context.dtoBedConfigurationIds, o => o.toString());
		setSelectedBedConfigurations(values);
	}, [context.dtoBedConfigurationIds]);

	const handleHotelNameChange = (event) => {
		setHotelName(event.target.value); // Обробник зміни для нового стану
	};
	const handleHotelStarsChange = (event) => {
		setHotelStars(event.target.value); // Обробник зміни для нового стану
	};
	const handleHotelDescriptionChange = (event) => {
		setHotelDescription(event.target.value); // Обробник зміни для нового стану
	};

	const handleCountryChange = (event) => {
		setSelectedCountryId(event.target.value); // Обробник зміни для нового стану
	};
	const handleCityChange = (event) => {
		setSelectedCityId(event.target.value); // Обробник зміни для нового стану
	};

	const handleReset = (event) => {
		event.preventDefault();
		context.setDtoId(0);
		context.setDtoCountryId(0);
		context.setDtoSettlementId(0);
		context.setDtoStars(null);
		context.setDtoName('');
		context.setDtoDescription("");
		context.setDtoHotelConfigurationIds([]);
		context.setDtoBedConfigurationIds([]);
		context.setDtoHotelFoodServicesIds([]);
		context.setDtoHotelOtherServicesIds([]);
		context.setDtoHotelImages([]);
		context.setDtoBookingIds([]);
		context.setDtoTourNameIds([]);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		const request = JSON.stringify({
			Id: hotelId,
			HotelConfigurationIds: context.dtoHotelConfigurationIds,
			BedConfigurationIds: selectedBedConfigurations,
			SettlementId: selectedCityId,
			TourNameIds: context.dtoTourNameIds,
			BookingIds: context.dtoBookingIds,
			HotelServiceIds: selectedFoodServices.concat(selectedOtherServices),
			Name: hotelName,
			Stars: isNaN(hotelStars) ? null : hotelStars,
			Description: hotelDescription
		});
		if (hotelId === 0) {await context.PostHotel(request); }
		else { await context.PutHotel(request); }
		handleReset(event);
	};
	return (

		<form name="HotelEditForm" id="HotelEditForm" style={{ border: '2px solid navy', borderRadius: '5px', }} onSubmit={handleSubmit}>
			<input type="hidden" name="hotelId" value={hotelId} />
			<div className="EditFormColumn">
				<div className="EditFormRow" style={{ flex: "1" }}>
					<div>Назва готелю:</div>
					<input className="EditFormInput" value={hotelName} onChange={handleHotelNameChange} name="HotelNameInput" required />
				</div>
				<div className="EditFormRow">
					<div>Зірки:</div>
					<select value={hotelStars} className="EditFormInput" onChange={handleHotelStarsChange} name="HotelStarsInput" required >
						<option value={null}>Без зірок</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>

			</div>
			<div className="EditFormRow">
				<div className="inputWrapper">
					<div>Країна:</div>
					{/* <input style={{ width: '420px', marginLeft: '70px'}} required /> */}
					<select className="EditFormInput" value={selectedCountryId} style={{ maxWidth: "65vw" }} name="countryId" onChange={handleCountryChange}>
						<option value="0" disabled selected hidden>Виберіть країну</option>
						{
							availableCountries.map(item =>
								<option value={item.id}>
									{item.name}
								</option>
							)
						}
					</select>

				</div>
				<div className="inputWrapper">
					<div>Місто:</div>
					{/* <input style={{ width: '420px' }} required /> */}
					<select className="EditFormInput" value={selectedCityId} style={{ maxWidth: "65vw" }} name="cityId" id="" onChange={handleCityChange}>
						<option value="0" disabled selected hidden>Виберіть місто</option>
						{
							availableCities.map(item =>
								<option value={item.id}>
									{item.name}
								</option>
							)
						}
					</select>
				</div>
			</div>
			<div className="EditFormRow">
				<div>Опис готелю:</div>
				<textarea className="hotelEditFormTextArea" value={hotelDescription} onChange={handleHotelDescriptionChange} name="hotelDescriptionInput" id="hotelDescription" required />
			</div>
			<div className="EditFormRow">
				<HotelImageInput />
			</div>

			<div className="service">
				<label className="toggle-label" for="toggle" class="toggle-label">Додати додаткові послуги</label>
				<input type="checkbox" id="toggle" class="toggle-checkbox" />
				<div className="container">
					<div className="container1">
						<div className="block">
							<div className="other" >Харчування</div>
							<select size={6} name="foodServicesSelect" id="foodServicesSelect" multiple value={selectedFoodServices} onChange={handleChangeFoodServices}>
								{
									props.foodServices.map(item =>
										<option value={item.id}>
											<div style={{ marginLeft: '10px' }}>{item.name}</div>
										</option>
									)
								}
							</select>
						</div>

						<div className="block">
							<div className="other">Послуги</div>
							<select size={6} name="otherServicesSelect" id="otherServicesSelect" multiple value={selectedOtherServices} onChange={handleChangeOtherServices}>
								{
									props.otherServices.map(item =>
										<option value={item.id}>
											<div style={{ marginLeft: '10px' }}>{item.name}</div>
										</option>
									)
								}
							</select>
						</div>
					</div>

					<div className="container1">
						<div className="block">
							<div className="other">Ліжка</div>
							<select size={10} name="bedConfigurationsSelect" id="bedConfigurationsSelect" multiple value={selectedBedConfigurations} onChange={handleChangeBedConfigurations}>
								{
									props.bedConfigurations.map(item =>
										<option value={item.id} style={{ display: "flex", justifyContent: "space-between" }}>
											{item.description}    ({item.capacity} осіб)
										</option>
									)
								}
							</select>
						</div>
					</div>
				</div>
			</div>

			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<input type="submit" id="userFormSubmit" className="form-savebutton" value="Зберегти"></input>
				<button id="userFormReset" onClick={handleReset} className="form-clearbutton">Очистити</button>
			</div>
		</form>

	);
}