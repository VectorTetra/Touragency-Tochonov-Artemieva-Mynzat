function TourList(props) {
    const [tours, setTours] = React.useState([]);
    // ===  ЦІ СТЕЙТИ ДЛЯ СЕСІЙНИХ ЗМІННИХ З SessionTourListController ===
    const [dtoCountryName, setDtoCountryName] = React.useState(null);
    const [dtoContinentName, setDtoContinentName] = React.useState(null);
    const [dtoTransportTypeName, setDtoTransportTypeName] = React.useState(null);
    // ===================================================================
    const [dtoSearchFormDestinationCountryId, setDtoSearchFormDestinationCountryId] = React.useState(0);
    const [dtoSearchFormArrivalDate, setDtoSearchFormArrivalDate] = React.useState(new Date());
    const [dtoSearchFormDepartureDate, setDtoSearchFormDepartureDate] = React.useState(new Date().getDate() + 7);
    const [dtoSearchFormStars, setDtoSearchFormStars] = React.useState([]);
    const [dtoSearchFormHotelServices, setDtoSearchFormHotelServices] = React.useState([]);
    const [dtoSearchFormTransportTypeId, setDtoSearchFormTransportTypeId] = React.useState(0);
    const GetSessionVars = async (e) => {
        e.preventDefault();
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7098/api/SessionTourList', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetAll' },
                statusCode: {
                    200: function (data) {
                        setDtoCountryName(data.countryName);
                        setDtoContinentName(data.continentName);
                        setDtoTransportTypeName(data.transportTypeName);
                    },
                    204: function () {
                        setDtoCountryName(null);
                        setDtoContinentName(null);
                        setDtoTransportTypeName(null);
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
    const DeleteSessionVars = async (e) => {
        e.preventDefault();
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7098/api/SessionTourList', // Замініть на ваш URL API
                method: 'DELETE',
                statusCode: {
                    200: function (data) {
                        setDtoCountryName(null);
                        setDtoContinentName(null);
                        setDtoTransportTypeName(null);
                    },
                    204: function () {
                        setDtoCountryName(null);
                        setDtoContinentName(null);
                        setDtoTransportTypeName(null);
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
        e.preventDefault();
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7098/api/Tour', // Замініть на ваш URL API
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
                        setDtoCountryName(data.countryName);
                        setDtoContinentName(data.continentName);
                        setDtoTransportTypeName(data.transportTypeName);
                    },
                    204: function () {
                        setDtoCountryName(null);
                        setDtoContinentName(null);
                        setDtoTransportTypeName(null);
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
    window.TourListContext = React.createContext(
        {
            tours: tours,
            dtoCountryName: dtoCountryName,
            dtoContinentName: dtoContinentName,
            dtoTransportTypeName: dtoTransportTypeName,
            dtoSearchFormDestinationCountryId: dtoSearchFormDestinationCountryId,
            dtoSearchFormArrivalDate: dtoSearchFormArrivalDate,
            dtoSearchFormDepartureDate: dtoSearchFormDepartureDate,
            dtoSearchFormStars: dtoSearchFormStars,
            dtoSearchFormHotelServices: dtoSearchFormHotelServices,
            dtoSearchFormTransportTypeId: dtoSearchFormTransportTypeId,
            setTours: setTours,
            setDtoCountryName: setDtoCountryName,
            setDtoContinentName: setDtoContinentName,
            setDtoTransportTypeName: setDtoTransportTypeName,
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

    }, []);

    return (
        <div>
            <MainPageHeader headerData={headerData} />
            <MainPageNavbar navbarItems={navbarItems} />
            <window.TourListContext.Provider value={{
                tours: tours,
                dtoCountryName: dtoCountryName,
                dtoContinentName: dtoContinentName,
                dtoTransportTypeName: dtoTransportTypeName,
                dtoSearchFormDestinationCountryId: dtoSearchFormDestinationCountryId,
                dtoSearchFormArrivalDate: dtoSearchFormArrivalDate,
                dtoSearchFormDepartureDate: dtoSearchFormDepartureDate,
                dtoSearchFormStars: dtoSearchFormStars,
                dtoSearchFormHotelServices: dtoSearchFormHotelServices,
                dtoSearchFormTransportTypeId: dtoSearchFormTransportTypeId,
                setTours: setTours,
                setDtoCountryName: setDtoCountryName,
                setDtoContinentName: setDtoContinentName,
                setDtoTransportTypeName: setDtoTransportTypeName,
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
                <ToursTableBlock tourList={toursArray.tours} />
            </window.TourListContext.Provider>
        </div>
    )

}