function FrameTour(props) {
    const [AvailableCountries, setAvailableCountries] = React.useState([]);
    const [AvailableTransportTypes, setAvailableTransportTypes] = React.useState([]);
    const [DtoId, setDtoId] = React.useState(0);
    const [DtoDuration, setDtoDuration] = React.useState(0);
    const [DtoTourIds, setDtoTourIds] = React.useState([]);
    const [DtoTransportTypeIds, setTransportTypeIds] = React.useState([]);
    const [DtoTourImageIds, setDtoTourImageIds] = React.useState([]);
    const [DtoPageStructureUrl, setDtoPageStructureUrl] = React.useState("");
    const [DtoCountryIds, setDtoCountryIds] = React.useState([]);
    const [DtoSettlementIds, setDtoSettlementIds] = React.useState([]);
    const [DtoHotelIds, setDtoHotelIds] = React.useState([]);
    const [DtoCountries, setDtoCountries] = React.useState([]);
    const [DtoSettlements, setDtoSettlements] = React.useState([]);
    const [DtoHotels, setDtoHotels] = React.useState([]);
    const [DtoTourName, setDtoTourName] = React.useState("");
    const [DtoRoute, setDtoRoute] = React.useState("");
    const [DtoIsHaveNightRides, setDtoIsHaveNightRides] = React.useState(false);
    const [DtoNightRidesCount, setDtoNightRidesCount] = React.useState(0);
    const [JsonConstructorItems, setJsonConstructorItems] = React.useState([]);
    const [TourNames, setTourNames] = React.useState(null);
    const GetLast200TourNames = async () => {
        await $.ajax({
            url: 'https://26.162.95.213:7100/api/TourName', // Замініть на ваш URL API
            method: 'GET',
            contentType: "application/json",
            data: { SearchParameter: 'Get200Last' },
            statusCode: {
                200: function (data) {
                    setTourNames(data);
                },
                204: function () {
                    setTourNames([]);
                }
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
    };

    React.useEffect(() => {
         GetLast200TourNames();
         $.ajax({
            url: 'https://26.162.95.213:7100/api/Country', // Замініть на ваш URL API
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
         $.ajax({
            url: 'https://26.162.95.213:7100/api/TransportType', // Замініть на ваш URL API
            method: 'GET',
            contentType: "application/json",
            data: { SearchParameter: 'GetAll' },
            statusCode: {
                200: function (data) {
                    setAvailableTransportTypes(data);
                },
                204: function () {
                    setAvailableTransportTypes([]);
                }
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
    }, []);
    window.FrameTourContext = React.createContext({
        AvailableCountries: AvailableCountries,
        AvailableTransportTypes: AvailableTransportTypes,
        DtoCountryIds: DtoCountryIds,
        DtoSettlementIds: DtoSettlementIds,
        DtoHotelIds: DtoHotelIds,
        DtoCountries: DtoCountries,
        DtoSettlements: DtoSettlements,
        DtoHotels: DtoHotels,
        DtoTourName: DtoTourName,
        DtoRoute: DtoRoute,
        DtoId: DtoId,
        DtoIsHaveNightRides: DtoIsHaveNightRides,
        DtoNightRidesCount: DtoNightRidesCount,
        DtoTourIds: DtoTourIds,
        DtoTransportTypeIds: DtoTransportTypeIds,
        JsonConstructorItems: JsonConstructorItems,
        DtoDuration: DtoDuration,
        DtoTourImageIds: DtoTourImageIds,
        TourNames: TourNames,
        DtoPageStructureUrl: DtoPageStructureUrl,
        setDtoPageStructureUrl: setDtoPageStructureUrl,
        setTourNames: setTourNames,
        setDtoTourImageIds: setDtoTourImageIds,
        setDtoDuration: setDtoDuration,
        setDtoCountryIds: setDtoCountryIds,
        setDtoId: setDtoId,
        setDtoSettlementIds: setDtoSettlementIds,
        setDtoHotelIds: setDtoHotelIds,
        setDtoCountries: setDtoCountries,
        setDtoSettlements: setDtoSettlements,
        setDtoHotels: setDtoHotels,
        setAvailableCountries: setAvailableCountries,
        setAvailableTransportTypes: setAvailableTransportTypes,
        setDtoTourName: setDtoTourName,
        setDtoRoute: setDtoRoute,
        setDtoIsHaveNightRides: setDtoIsHaveNightRides,
        setDtoNightRidesCount: setDtoNightRidesCount,
        setDtoTourIds: setDtoTourIds,
        setTransportTypeIds: setTransportTypeIds,
        setJsonConstructorItems: setJsonConstructorItems,
        GetLast200TourNames: GetLast200TourNames
    });

    return (
        <div id="framePeople">
            <window.FrameTourContext.Provider value={{
                AvailableCountries: AvailableCountries,
                AvailableTransportTypes: AvailableTransportTypes,
                DtoCountryIds: DtoCountryIds,
                DtoSettlementIds: DtoSettlementIds,
                DtoHotelIds: DtoHotelIds,
                DtoCountries: DtoCountries,
                DtoSettlements: DtoSettlements,
                DtoHotels: DtoHotels,
                DtoTourName: DtoTourName,
                DtoRoute: DtoRoute,
                DtoId: DtoId,
                DtoIsHaveNightRides: DtoIsHaveNightRides,
                DtoNightRidesCount: DtoNightRidesCount,
                DtoTourIds: DtoTourIds,
                DtoTransportTypeIds: DtoTransportTypeIds,
                JsonConstructorItems: JsonConstructorItems,
                DtoDuration: DtoDuration,
                DtoTourImageIds: DtoTourImageIds,
                TourNames: TourNames,
                DtoPageStructureUrl: DtoPageStructureUrl,
                setDtoPageStructureUrl: setDtoPageStructureUrl,
                setTourNames: setTourNames,
                setDtoTourImageIds: setDtoTourImageIds,
                setDtoDuration: setDtoDuration,
                setDtoCountryIds: setDtoCountryIds,
                setDtoId: setDtoId,
                setDtoSettlementIds: setDtoSettlementIds,
                setDtoHotelIds: setDtoHotelIds,
                setDtoCountries: setDtoCountries,
                setDtoSettlements: setDtoSettlements,
                setDtoHotels: setDtoHotels,
                setAvailableCountries: setAvailableCountries,
                setAvailableTransportTypes: setAvailableTransportTypes,
                setDtoTourName: setDtoTourName,
                setDtoRoute: setDtoRoute,
                setDtoIsHaveNightRides: setDtoIsHaveNightRides,
                setDtoNightRidesCount: setDtoNightRidesCount,
                setDtoTourIds: setDtoTourIds,
                setTransportTypeIds: setTransportTypeIds,
                setJsonConstructorItems: setJsonConstructorItems,
                GetLast200TourNames: GetLast200TourNames
            }}>

                {(AvailableCountries.length > 0 && AvailableTransportTypes.length > 0 && TourNames !== null) ?
                    <TourTabNameCaption />
                    : <Loading />}

            </window.FrameTourContext.Provider>
        </div>
    )
}