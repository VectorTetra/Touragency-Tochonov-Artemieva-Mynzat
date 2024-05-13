function TourList(props) {
    const [tours, setTours] = React.useState([]);
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
    const GetSessionVars = async () => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7099/api/SessionTourList', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetAll' },
                statusCode: {
                    200: function (data) {
                        setDtoCountryName(data.countryName);
                        setDtoContinentName(data.continentName);
                        setDtoTransportTypeId(data.transportTypeId);
                    },
                    204: function () {
                        setDtoCountryName(null);
                        setDtoContinentName(null);
                        setDtoTransportTypeId(null);
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
    const DeleteSessionVars = async () => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7099/api/SessionTourList', // Замініть на ваш URL API
                method: 'DELETE',
                statusCode: {
                    200: function (data) {
                        setDtoCountryName(null);
                        setDtoContinentName(null);
                        setDtoTransportTypeId(null);
                    },
                    204: function () {
                        setDtoCountryName(null);
                        setDtoContinentName(null);
                        setDtoTransportTypeId(null);
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
    const GetToursByCompositeSearch = async (countryId,continentId,transportTypeId,arrivalDate,departureDate,stars,hotelServices) => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7099/api/Tour', // Замініть на ваш URL API
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
                url: 'https://26.162.95.213:7099/api/Tour', // Замініть на ваш URL API
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
                url: 'https://26.162.95.213:7099/api/Tour', // Замініть на ваш URL API
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
            setTours: setTours,
            setDtoCountryName: setDtoCountryName,
            setDtoContinentName: setDtoContinentName,
            setDtoTransportTypeId: setDtoTransportTypeId,
            setDtoSearchFormDestinationCountryId: setDtoSearchFormDestinationCountryId,
            setDtoSearchFormArrivalDate: setDtoSearchFormArrivalDate,
            setDtoSearchFormDepartureDate: setDtoSearchFormDepartureDate,
            setDtoSearchFormStars: setDtoSearchFormStars,
            setDtoSearchFormHotelServices: setDtoSearchFormHotelServices,
            setDtoSearchFormTransportTypeId: setDtoSearchFormTransportTypeId,
            GetSessionVars: GetSessionVars,
            DeleteSessionVars: DeleteSessionVars
        }
    );

    React.useEffect(() => {
        GetSessionVars();
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
                setTours: setTours,
                setDtoCountryName: setDtoCountryName,
                setDtoContinentName: setDtoContinentName,
                setDtoTransportTypeId: setDtoTransportTypeId,
                setDtoSearchFormDestinationCountryId: setDtoSearchFormDestinationCountryId,
                setDtoSearchFormArrivalDate: setDtoSearchFormArrivalDate,
                setDtoSearchFormDepartureDate: setDtoSearchFormDepartureDate,
                setDtoSearchFormStars: setDtoSearchFormStars,
                setDtoSearchFormHotelServices: setDtoSearchFormHotelServices,
                setDtoSearchFormTransportTypeId: setDtoSearchFormTransportTypeId,
                GetSessionVars: GetSessionVars,
                DeleteSessionVars: DeleteSessionVars
            }}>
                <MainPageSearch SearchBarData={SearchBarData} />
                <div style={{paddingLeft:"25vh", paddingRight:"25vh", marginBottom:"20px"}}>
                    <ToursTableBlock tourList={tours} />
                </div>
            </window.TourListContext.Provider>
        </div>
    )

}