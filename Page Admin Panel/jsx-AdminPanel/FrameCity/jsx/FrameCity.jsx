function FrameCity(props) {
	//const [countries, setCountries] = React.useState([]);
	const [settlements, setSettlements] = React.useState([]);
	const [dtoId, setDtoId] = React.useState(0);
	const [dtoCountryId, setDtoCountryId] = React.useState(0);
	const [dtoName, setDtoName] = React.useState('');
	const [dtoHotelIds, setDtoHotelIds] = React.useState([]);
	const [dtoTourNameIds, setDtoTourNameIds] = React.useState([]);
	const GetAll = () => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Settlement', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			statusCode: {
				200: function (data) {
					setSettlements(data);
				},
				204: function () {
					setSettlements([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});

	}
	const Get200Last = () => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Settlement', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'Get200Last' },
			statusCode: {
				200: function (data) {
					setSettlements(data);
				},
				204: function () {
					setSettlements([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const GetById = (id) => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Settlement', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetById', Id: id },
			statusCode: {
				200: function (data) {
					setSettlements(data);
				},
				204: function () {
					setSettlements([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const GetByName = (inputName) => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Settlement', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetByName', Name: inputName },
			statusCode: {
				200: function (data) {
					setSettlements(data);
				},
				204: function () {
					setSettlements([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const GetByCompositeSearch = (inputName, inputCountryName) => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Settlement', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetByCompositeSearch', Name: inputName, CountryName: inputCountryName },
			statusCode: {
				200: function (data) {
					setSettlements(data);
				},
				204: function () {
					setSettlements([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const PostSettlement = (inputName, countryId) => {
		let request = JSON.stringify({
			Id: 0,
			Name: inputName,
			HotelIds: [],
			CountryId: countryId,
			TourNameIds: []
		});
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Settlement', // Замініть на ваш URL API
			method: 'POST',
			contentType: "application/json",
			data: request,
			success: function (data) {
				Get200Last();
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const PutSettlement = (inputName, countryId) => {
		let request = JSON.stringify({
			Id: dtoId,
			Name: inputName,
			HotelIds: dtoHotelIds,
			CountryId: countryId,
			TourNameIds: dtoTourNameIds
		});
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Settlement', // Замініть на ваш URL API
			method: 'PUT',
			contentType: "application/json",
			data: request,
			success: function (data) {
				Get200Last();
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	window.FrameCityContext = React.createContext({
		GetAll: GetAll,
		Get200Last: Get200Last,
		GetById: GetById,
		GetByName: GetByName,
		GetByCompositeSearch: GetByCompositeSearch,
		PostSettlement: PostSettlement,
		PutSettlement: PutSettlement,
		setDtoId: setDtoId,
		setDtoName: setDtoName,
		setDtoTourNameIds: setDtoTourNameIds,
		setDtoHotelIds: setDtoHotelIds,
		setSettlements: setSettlements,
		setDtoCountryId: setDtoCountryId,
		settlements: settlements,
		dtoId: dtoId,
		dtoCountryId: dtoCountryId,
		dtoName: dtoName,
		dtoHotelIds: dtoHotelIds,
		dtoTourNameIds: dtoTourNameIds
	});
	React.useEffect(() => {
		Get200Last();
	}, []); // Пустий масив означає, що цей ефект буде виконуватися тільки при монтуванні компонента

	return (
		<window.FrameCityContext.Provider value={{
			GetAll: GetAll,
			Get200Last: Get200Last,
			GetById: GetById,
			GetByName: GetByName,
			GetByCompositeSearch: GetByCompositeSearch,
			PostSettlement: PostSettlement,
			PutSettlement: PutSettlement,
			setDtoId: setDtoId,
			setDtoName: setDtoName,
			setDtoTourNameIds: setDtoTourNameIds,
			setDtoHotelIds: setDtoHotelIds,
			setSettlements: setSettlements,
			setDtoCountryId: setDtoCountryId,
			settlements: settlements,
			dtoId: dtoId,
			dtoCountryId: dtoCountryId,
			dtoName: dtoName,
			dtoHotelIds: dtoHotelIds,
			dtoTourNameIds: dtoTourNameIds
		}}>

			<div id="frameCountry">
				<FrameCityHeader />
				<CityEditForm/>
				<CitySearchBar/>
				<CityList cities={settlements} />
			</div>
		</window.FrameCityContext.Provider>
	);
};