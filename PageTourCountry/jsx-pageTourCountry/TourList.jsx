function TourList(props) {
    const [tours, setTours] = React.useState([]);
    const [countries, setCountries] = React.useState([]);
    const [starsLabels, setStarsLabels] = React.useState([{ value: 1, label: "1*" }, { value: 2, label: "2*" }, { value: 3, label: "3*" }, { value: 4, label: "4*" }, { value: 5, label: "5*" }]);
    const [foodServices, setFoodServices] = React.useState([]);
    const [otherServices, setOtherServices] = React.useState([]);
    const [transportTypes, setTransportTypes] = React.useState([]);
    // ===  ЦІ СТЕЙТИ ДЛЯ СЕСІЙНИХ ЗМІННИХ З SessionTourListController ===
    const [dtoCountryName, setDtoCountryName] = React.useState(props.countryName);
    const [dtoContinentName, setDtoContinentName] = React.useState(props.continentName);
    const [dtoTransportTypeId, setDtoTransportTypeId] = React.useState(props.transportTypeId);
    // ===================================================================
    const [dtoSearchFormDestinationCountryId, setDtoSearchFormDestinationCountryId] = React.useState(0);
    const [dtoSearchFormArrivalDate, setDtoSearchFormArrivalDate] = React.useState(new Date());
    const [dtoSearchFormDepartureDate, setDtoSearchFormDepartureDate] = React.useState(new Date().getDate() + 7);
    const [dtoSearchFormStars, setDtoSearchFormStars] = React.useState([]);
    const [dtoSearchFormHotelServices, setDtoSearchFormHotelServices] = React.useState([]);
    const [dtoSearchFormTransportTypeId, setDtoSearchFormTransportTypeId] = React.useState(0);
    const GetToursByCompositeSearch = async (countryId,continentId,transportTypeId,arrivalDate,departureDate,stars,hotelServices) => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7100/api/Tour', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetByCompositeSearch',
                    countryId: countryId,
                    continentId: continentId,
                    transportTypeId: transportTypeId,
                    ArrivalDate: arrivalDate,
                    DepartureDate: departureDate,
                    stars: stars,
                    hotelServicesIds: hotelServices
                },
                statusCode: {
                    200: function (data) {
                        setTours(data);
                    },
                    204: function () {
                        setTours([]);
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });
            console.log("PrepareToEdit success data: ", response);

        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
    };
    const Get11LastActiveTours = async () => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7100/api/Tour', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetByCompositeSearch',
                    TourStateId: 1
                },
                statusCode: {
                    200: function (data) {
                        const last11Tours = data.slice(-11); // Отримуємо останні 10 елементів
                        setTours(last11Tours);
                    },
                    204: function () {
                        setTours([]);
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });
            console.log("PrepareToEdit success data: ", response);

        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
    };
    const Get11LastActiveToursByProps = async () => 
    {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7100/api/Tour', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetByCompositeSearch',
                    TourStateId: 1,
                    CountryName: dtoCountryName,
                    ContinentName: dtoContinentName,
                    TransportTypeId: dtoTransportTypeId
                },
                statusCode: {
                    200: function (data) {
                        const last11Tours = data.slice(-11); // Отримуємо останні 10 елементів
                        setTours(last11Tours);
                    },
                    204: function () {
                        setTours([]);
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });
            console.log("PrepareToEdit success data: ", response);

        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
    }
    React.useEffect(() => {
        $.ajax({
			url: 'https://26.162.95.213:7100/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			statusCode: {
				200: function(data) {
					setCountries(data);
				},
				204: function() {
					setCountries([]);
				}
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
        $.ajax({
			url: 'https://26.162.95.213:7100/api/HotelService', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetByHotelServiceTypeId', HotelServiceTypeId: 1 },
			statusCode: {
				200: function(data) {
					setFoodServices(data);
				},
				204: function() {
					setFoodServices([]);
				}
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
        $.ajax({
			url: 'https://26.162.95.213:7100/api/HotelService', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetByHotelServiceTypeId', HotelServiceTypeId: 2 },
			statusCode: {
				200: function(data) {
					setOtherServices(data);
				},
				204: function() {
					setOtherServices([]);
				}
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
        $.ajax({
			url: 'https://26.162.95.213:7100/api/TransportType', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll'},
			statusCode: {
				200: function(data) {
					setTransportTypes(data);
				},
				204: function() {
					setTransportTypes([]);
				}
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
    }, []);
    window.TourListContext = React.createContext(
        {
            tours: tours,
            dtoCountryName: dtoCountryName,
            dtoContinentName: dtoContinentName,
            dtoTransportTypeId: dtoTransportTypeId,
            dtoSearchFormDestinationCountryId: dtoSearchFormDestinationCountryId,
            dtoSearchFormArrivalDate: dtoSearchFormArrivalDate,
            dtoSearchFormDepartureDate: dtoSearchFormDepartureDate,
            dtoSearchFormStars: dtoSearchFormStars,
            dtoSearchFormHotelServices: dtoSearchFormHotelServices,
            dtoSearchFormTransportTypeId: dtoSearchFormTransportTypeId,
            countries: countries,
            starsLabels: starsLabels,
            setStarsLabels: setStarsLabels,
            foodServices: foodServices,
            setFoodServices: setFoodServices,
            otherServices: otherServices,
            setOtherServices: setOtherServices,
            transportTypes: transportTypes,
            setTransportTypes: setTransportTypes,
            setTours: setTours,
            setDtoCountryName: setDtoCountryName,
            setDtoContinentName: setDtoContinentName,
            setDtoTransportTypeId: setDtoTransportTypeId,
            setDtoSearchFormDestinationCountryId: setDtoSearchFormDestinationCountryId,
            setDtoSearchFormArrivalDate: setDtoSearchFormArrivalDate,
            setDtoSearchFormDepartureDate: setDtoSearchFormDepartureDate,
            setDtoSearchFormStars: setDtoSearchFormStars,
            setDtoSearchFormHotelServices: setDtoSearchFormHotelServices,
            setDtoSearchFormTransportTypeId: setDtoSearchFormTransportTypeId
        }
    );

    React.useEffect(() => {
        //GetSessionVars();
        if(dtoCountryName === null && dtoContinentName === null && dtoTransportTypeId === null){
            Get11LastActiveTours();
        }
        else{
            Get11LastActiveToursByProps();
        }
    }, []);

    return (
        <div>
            <MainPageHeader headerData={headerData} />
            <MainPageNavbar navbarItems={navbarItems} />
            <window.TourListContext.Provider value={{
               tours: tours,
               dtoCountryName: dtoCountryName,
               dtoContinentName: dtoContinentName,
               dtoTransportTypeId: dtoTransportTypeId,
               dtoSearchFormDestinationCountryId: dtoSearchFormDestinationCountryId,
               dtoSearchFormArrivalDate: dtoSearchFormArrivalDate,
               dtoSearchFormDepartureDate: dtoSearchFormDepartureDate,
               dtoSearchFormStars: dtoSearchFormStars,
               dtoSearchFormHotelServices: dtoSearchFormHotelServices,
               dtoSearchFormTransportTypeId: dtoSearchFormTransportTypeId,
               countries: countries,
               starsLabels: starsLabels,
               setStarsLabels: setStarsLabels,
               foodServices: foodServices,
               setFoodServices: setFoodServices,
               otherServices: otherServices,
               setOtherServices: setOtherServices,
               transportTypes: transportTypes,
               setTransportTypes: setTransportTypes,
               setTours: setTours,
               setDtoCountryName: setDtoCountryName,
               setDtoContinentName: setDtoContinentName,
               setDtoTransportTypeId: setDtoTransportTypeId,
               setDtoSearchFormDestinationCountryId: setDtoSearchFormDestinationCountryId,
               setDtoSearchFormArrivalDate: setDtoSearchFormArrivalDate,
               setDtoSearchFormDepartureDate: setDtoSearchFormDepartureDate,
               setDtoSearchFormStars: setDtoSearchFormStars,
               setDtoSearchFormHotelServices: setDtoSearchFormHotelServices,
               setDtoSearchFormTransportTypeId: setDtoSearchFormTransportTypeId
            }}>
                <MainPageSearch SearchBarData={SearchBarData} />
                <div style={{paddingLeft:"25vh", paddingRight:"25vh", marginBottom:"20px"}}>
                    <ToursTableBlock tourList={tours} />
                </div>
            </window.TourListContext.Provider>
        </div>
    )

}