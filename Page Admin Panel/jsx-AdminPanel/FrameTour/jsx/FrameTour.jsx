function FrameTour(props) {
    const [AvailableCountries, setAvailableCountries] = React.useState([]);
    const [AvailableTransportTypes, setAvailableTransportTypes] = React.useState([]);
    const [DtoId, setDtoId] = React.useState(0);
    const [DtoDuration, setDtoDuration] = React.useState(0);
    const [DtoTourIds, setDtoTourIds] = React.useState([]);
    const [DtoTransportTypeIds, setTransportTypeIds] = React.useState([]);
    const [DtoTourImageIds, setDtoTourImageIds] = React.useState([]);

    const [DtoCountryIds, setDtoCountryIds] = React.useState([
    ]);
    const [DtoSettlementIds, setDtoSettlementIds] = React.useState([
    ]);
    const [DtoHotelIds, setDtoHotelIds] = React.useState([
    ]);
    const [DtoCountries, setDtoCountries] = React.useState([
        // {
        //     id: 175,
        //     continentId: 4,
        //     name: "Україна",
        //     continentName: "Європа",
        //     flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/120px-Flag_of_Ukraine.svg.png",
        //     settlementIds: [
        //         25,
        //         26,
        //         27,
        //         28,
        //         29,
        //         30,
        //         31,
        //         32,
        //         33,
        //         34,
        //         35,
        //         36,
        //         37
        //     ],
        //     tourNameIds: [
        //         7,
        //         8,
        //         9,
        //         10,
        //         11
        //     ]
        // }
    ]);
    const [DtoSettlements, setDtoSettlements] = React.useState([
        // {
        //     id: 25,
        //     name: "Львів",
        //     tourNameIds: [
        //         7,
        //         8,
        //         11
        //     ],
        //     hotelIds: [
        //         25
        //     ],
        //     countryId: 175,
        //     countryName: "Україна",
        //     countryFlagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/120px-Flag_of_Ukraine.svg.png"
        // },
        // {
        //     id: 28,
        //     name: "Одеса",
        //     tourNameIds: [
        //         7,
        //         9
        //     ],
        //     hotelIds: [
        //         28
        //     ],
        //     countryId: 175,
        //     countryName: "Україна",
        //     countryFlagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/120px-Flag_of_Ukraine.svg.png"
        // }
    ]);
    const [DtoHotels, setDtoHotels] = React.useState([
        // {
        //     id: 28,
        //     name: "Gagarinn Odesa",
        //     stars: 4,
        //     description: "Готель на березі моря в Одесі",
        //     hotelConfigurationIds: [],
        //     bedConfigurationIds: [
        //         16,
        //         17,
        //         18,
        //         19,
        //         20
        //     ],
        //     settlementId: 28,
        //     tourNameIds: [
        //         7,
        //         9
        //     ],
        //     bookingIds: [],
        //     hotelServiceIds: [
        //         2,
        //         4,
        //         8,
        //         9
        //     ],
        //     hotelImages: [
        //         {
        //             id: 10005,
        //             imageUrl: "https://26.162.95.213:7099/HotelImages/gagarinn_odesa_dcb272f5-5c9a-4e43-9118-0b10dbd70c95.jpg",
        //             hotelId: 28
        //         }
        //     ],
        //     foodServicesIds: [
        //         2,
        //         4
        //     ],
        //     foodServices: [
        //         "BB",
        //         "FB"
        //     ],
        //     otherServicesIds: [
        //         8,
        //         9
        //     ],
        //     otherServices: [
        //         "Аквапарк",
        //         "Анімація"
        //     ],
        //     settlementName: "Одеса",
        //     countryName: "Україна",
        //     countryId: 175
        // }
    ]);

    const [DtoTourName, setDtoTourName] = React.useState("");
    const [DtoRoute, setDtoRoute] = React.useState("");
    const [DtoIsHaveNightRides, setDtoIsHaveNightRides] = React.useState(false);
    const [DtoNightRidesCount, setDtoNightRidesCount] = React.useState(0);
    const [JsonConstructorItems, setJsonConstructorItems] = React.useState([

        // {
        //     type: "dtoNightRidesInfo",
        //     id: "_lololo",
        //     value: "Днів : 6, нічних переїздів : 2"
        // },
        // {
        //     type: "paragraph",
        //     id: "_ibme9op0a",
        //     value: "paragraph"
        // },
        // {
        //     type: "paragraphCaption",
        //     id: "_2u9hop56c",
        //     value: "paragraphCaption"
        // },
        // {
        //     type: "articleCaption",
        //     id: "_iaiz7c50e",
        //     value: "articleCaption"
        // },
        // {
        //     type: "gallery",
        //     id: "_s80ilzrxp",
        //     value: [
        //         {
        //             dataUrl: "https://26.162.95.213:7099/ReviewImages/Four_Seasons_Hotel_George_V_Paris_027c92d0-f599-4810-ac9c-d8f675a6b637.jpg",
        //             id: "_91nate0s8",
        //             name: "https://26.162.95.213:7099/ReviewImages/Four_Seasons_Hotel_George_V_Paris_027c92d0-f599-4810-ac9c-d8f675a6b637.jpg"
        //         }
        //     ]
        // }

    ]);
    const [TourNames, setTourNames] = React.useState(null);
    const GetLast200TourNames = () => {
        $.ajax({
			url: 'https://26.162.95.213:7099/api/TourName', // Замініть на ваш URL API
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
        $.ajax({
            url: 'https://26.162.95.213:7099/api/TransportType', // Замініть на ваш URL API
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
        setJsonConstructorItems: setJsonConstructorItems
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
                setJsonConstructorItems: setJsonConstructorItems
            }}>
                
                {(AvailableCountries.length > 0 && AvailableTransportTypes.length > 0 && TourNames !== null) ? <TourTabNameCaption /> : <Loading />}

            </window.FrameTourContext.Provider>
        </div>
    )
}