function FrameHotel(props) {
	const [hotels, setHotels] = React.useState([]);
	const [dtoId, setDtoId] = React.useState(0);
	const [dtoCountryId, setDtoCountryId] = React.useState(0);
	const [dtoSettlementId, setDtoSettlementId] = React.useState(0);
	const [dtoStars, setDtoStars] = React.useState(null);
	const [dtoName, setDtoName] = React.useState('');
	const [dtoDescription, setDtoDescription] = React.useState('');
	const [dtoHotelConfigurationIds, setDtoHotelConfigurationIds] = React.useState([]);
	const [dtoBedConfigurationIds, setDtoBedConfigurationIds] = React.useState([]);
	const [dtoHotelFoodServicesIds, setDtoHotelFoodServicesIds] = React.useState([]);
	const [dtoHotelOtherServicesIds, setDtoHotelOtherServicesIds] = React.useState([]);
	const [dtoHotelImages, setDtoHotelImages] = React.useState([]); // Об'єкт, який зберігає Id і шлях до зображення
	const [dtoBookingIds, setDtoBookingIds] = React.useState([]);
	const [dtoTourNameIds, setDtoTourNameIds] = React.useState([]);

	const [foodServices, setFoodServices] = React.useState([]);
	const [otherServices, setOtherServices] = React.useState([]);
	const [bedConfigurations, setBedConfigurations] = React.useState([]);
	const [countries, setCountries] = React.useState([]);
	const GetAll = () => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Hotel', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			statusCode: {
				200: function (data) {
					setHotels(data);
				},
				204: function () {
					setHotels([]);
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
			url: 'https://26.162.95.213:7099/api/Hotel', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'Get200Last' },
			statusCode: {
				200: function (data) {
					setHotels(data);
				},
				204: function () {
					setHotels([]);
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
			url: 'https://26.162.95.213:7099/api/Hotel', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetById', Id: id },
			statusCode: {
				200: function (data) {
					setHotels(data);
				},
				204: function () {
					setHotels([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const GetByCompositeSearch = (inputName, inputSettlementName, inputCountryName) => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Hotel', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetByCompositeSearch', Name: inputName, SettlementName: inputSettlementName, CountryName: inputCountryName },
			statusCode: {
				200: function (data) {
					setHotels(data);
				},
				204: function () {
					setHotels([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const PostHotel = async (request) => {
		let response1 = null;
		
		try {
			await $.ajax({
				url: 'https://26.162.95.213:7099/api/Hotel', // Замініть на ваш URL API
				method: 'POST',
				contentType: "application/json",
				data: request,
				success: function (data) {
					response1 = data;
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
			if (response1 != null && document.getElementById("hotelImageInput").files.length > 0) {
				let imageUrl = null;
				const hotelId = response1.id;
				const formData = new FormData();
				formData.append('hotelId', hotelId);
				formData.append('file', document.getElementById("hotelImageInput").files[0]);
				await $.ajax({
					url: 'https://26.162.95.213:7099/api/HotelImage/UploadImage', // Замініть на ваш URL API
					method: 'POST',
					contentType: false, // Указывает тип содержимого, которое будет передано на сервер. 
					processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
					data: formData,
					statusCode: {
						200: function (data1) {
							imageUrl = data1;
							imageUrl = "https://26.162.95.213:7099" + imageUrl;
						}
					},
					error: function (error) {
						console.error('Помилка при отриманні даних', error);
						alert(error.responseText);
					}
				});
				const request3 = JSON.stringify({
					HotelId: hotelId,
					ImageUrl: imageUrl,
					Id: 0
				});
				await $.ajax({
					url: 'https://26.162.95.213:7099/api/HotelImage', // Замініть на ваш URL API
					method: 'POST',
					contentType: "application/json",
					data: request3,
					statusCode: {
						200: function (data3) {

						}
					},
					error: function (error) {
						console.error('Помилка при отриманні даних', error);
						alert(error.responseText);
					}
				});
			}
		}
		catch (error) {
			alert(error.responseText);
		}
		Get200Last();
	}
	const PutHotel = async (request) => {
		let response1 = null;
		console.log(request);
		try {
			await $.ajax({
				url: 'https://26.162.95.213:7099/api/Hotel', // Замініть на ваш URL API
				method: 'PUT',
				contentType: "application/json",
				data: request,
				success: function (data) {
					response1 = data;
					console.log("Виконано PUT Hotel");
					console.log("hotelImageInput.files.length", document.getElementById("hotelImageInput").files.length);
					console.log("response1", response1);
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
			if (response1 != null && document.getElementById("hotelImageInput").files.length > 0) {
				let image = null;
				const hotelId = response1.id;
				const formData = new FormData();
				formData.append('hotelId', hotelId);
				formData.append('file', document.getElementById("hotelImageInput").files[0]);
				await $.ajax({
					url: 'https://26.162.95.213:7099/api/HotelImage/UploadImage', // Замініть на ваш URL API
					method: 'PUT',
					contentType: false, // Указывает тип содержимого, которое будет передано на сервер. 
					processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
					data: formData,
					statusCode: {
						200: function (data1) {
							image = data1;
							image.imageUrl = "https://26.162.95.213:7099" + image.imageUrl;
							console.log("Виконано PUT HotelImage/UploadImage");
						}
					},
					error: function (error) {
						console.error('Помилка при отриманні даних', error);
						alert(error.responseText);
					}
				});
				const request3 = JSON.stringify({
					HotelId: image.hotelId,
					ImageUrl: image.imageUrl,
					Id: image.id
				});
				if (image.id === 0) {
					await $.ajax({
						url: 'https://26.162.95.213:7099/api/HotelImage', // Замініть на ваш URL API
						method: 'POST',
						contentType: "application/json",
						data: request3,
						statusCode: {
							200: function (data3) {
								console.log("Виконано POST HotelImage");
							}
						},
						error: function (error) {
							console.error('Помилка при отриманні даних', error);
							alert(error.responseText);
						}
					});
				}
				else {
					await $.ajax({
						url: 'https://26.162.95.213:7099/api/HotelImage', // Замініть на ваш URL API
						method: 'PUT',
						contentType: "application/json",
						data: request3,
						statusCode: {
							200: function (data4) {
								console.log("Виконано PUT HotelImage");
							}
						},
						error: function (error) {
							console.error('Помилка при отриманні даних', error);
							alert(error.responseText);
						}
					});
				}
			}
		}
		catch (error) {
			alert(error.responseText);
		}
		Get200Last();
	}
	const GetAllFoodServices = () => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/HotelService', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetByHotelServiceTypeId', HotelServiceTypeId: 1 },
			statusCode: {
				200: function (data) {
					setFoodServices(data);
				},
				204: function () {
					setFoodServices([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	};
	const GetAllOtherServices = () => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/HotelService', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetByHotelServiceTypeId', HotelServiceTypeId: 2 },
			statusCode: {
				200: function (data) {
					setOtherServices(data);
				},
				204: function () {
					setOtherServices([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	};
	const GetAllBedConfigurations = () => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/BedConfiguration', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			statusCode: {
				200: function (data) {
					setBedConfigurations(data);
				},
				204: function () {
					setBedConfigurations([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	};
	const GetAllCountries = () => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Country', // Замініть на ваш URL API
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
	};
	React.useEffect(() => {
		Get200Last();
		GetAllFoodServices();
		GetAllOtherServices();
		GetAllBedConfigurations();
		GetAllCountries();
	}, []);
	React.useEffect(() => {
		console.log('FrameHotel hotels', hotels);
	}, [hotels]);
	window.FrameHotelContext = React.createContext({
		GetAll: GetAll,
		Get200Last: Get200Last,
		GetById: GetById,
		GetByCompositeSearch: GetByCompositeSearch,
		PostHotel: PostHotel,
		PutHotel: PutHotel,
		setDtoId: setDtoId,
		setDtoCountryId: setDtoCountryId,
		setDtoSettlementId: setDtoSettlementId,
		setDtoName: setDtoName,
		setDtoDescription: setDtoDescription,
		setDtoHotelConfigurationIds: setDtoHotelConfigurationIds,
		setDtoBedConfigurationIds: setDtoBedConfigurationIds,
		setDtoHotelFoodServicesIds: setDtoHotelFoodServicesIds,
		setDtoHotelOtherServicesIds: setDtoHotelOtherServicesIds,
		setDtoHotelImages: setDtoHotelImages,
		setDtoBookingIds: setDtoBookingIds,
		setDtoTourNameIds: setDtoTourNameIds,
		setDtoStars: setDtoStars,
		setHotels: setHotels,
		hotels: hotels,
		dtoId: dtoId,
		dtoCountryId: dtoCountryId,
		dtoSettlementId: dtoSettlementId,
		dtoName: dtoName,
		dtoStars: dtoStars,
		dtoDescription: dtoDescription,
		dtoHotelConfigurationIds: dtoHotelConfigurationIds,
		dtoBedConfigurationIds: dtoBedConfigurationIds,
		dtoHotelFoodServicesIds: dtoHotelFoodServicesIds,
		dtoHotelOtherServicesIds: dtoHotelOtherServicesIds,
		dtoHotelImages: dtoHotelImages,
		dtoBookingIds: dtoBookingIds,
		dtoTourNameIds: dtoTourNameIds
	});
	return (
		<window.FrameHotelContext.Provider value={{
			GetAll: GetAll,
			Get200Last: Get200Last,
			GetById: GetById,
			GetByCompositeSearch: GetByCompositeSearch,
			PostHotel: PostHotel,
			PutHotel: PutHotel,
			setDtoId: setDtoId,
			setDtoCountryId: setDtoCountryId,
			setDtoSettlementId: setDtoSettlementId,
			setDtoName: setDtoName,
			setDtoDescription: setDtoDescription,
			setDtoHotelConfigurationIds: setDtoHotelConfigurationIds,
			setDtoBedConfigurationIds: setDtoBedConfigurationIds,
			setDtoHotelFoodServicesIds: setDtoHotelFoodServicesIds,
			setDtoHotelOtherServicesIds: setDtoHotelOtherServicesIds,
			setDtoHotelImages: setDtoHotelImages,
			setDtoBookingIds: setDtoBookingIds,
			setDtoTourNameIds: setDtoTourNameIds,
			setDtoStars: setDtoStars,
			setHotels: setHotels,
			hotels: hotels,
			dtoId: dtoId,
			dtoCountryId: dtoCountryId,
			dtoStars: dtoStars,
			dtoSettlementId: dtoSettlementId,
			dtoName: dtoName,
			dtoDescription: dtoDescription,
			dtoHotelConfigurationIds: dtoHotelConfigurationIds,
			dtoBedConfigurationIds: dtoBedConfigurationIds,
			dtoHotelFoodServicesIds: dtoHotelFoodServicesIds,
			dtoHotelOtherServicesIds: dtoHotelOtherServicesIds,
			dtoHotelImages: dtoHotelImages,
			dtoBookingIds: dtoBookingIds,
			dtoTourNameIds: dtoTourNameIds
		}}>
			<div id="frameHotel">
				<FrameHotelHeader quantity={hotels.length} />
				<HotelEditForm tab={props.tab}
					foodServices={foodServices}
					otherServices={otherServices}
					bedConfigurations={bedConfigurations}
					countries={countries} />
				<HotelSearch hotel={hotels} setHotel={setHotels} />
				<HotelAppart hotel={hotels} />
			</div>

		</window.FrameHotelContext.Provider>
	);
};
