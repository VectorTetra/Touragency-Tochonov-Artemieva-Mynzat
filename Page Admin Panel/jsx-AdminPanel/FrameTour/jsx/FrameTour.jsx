function FrameTour(props) {
    const [AvailableCountries, setAvailableCountries] = React.useState([]);
    const [AvailableSettlements, setAvailableSettlements] = React.useState([]);
    const [AvailableHotels, setAvailableHotels] = React.useState([]);
    const [SelectedCountries, setSelectedCountries] = React.useState([]);
    const [SelectedSettlements, setSelectedSettlements] = React.useState([]);
    const [SelectedHotels, setSelectedHotels] = React.useState([]);
    const [DtoTourName, setDtoTourName] = React.useState("");
    const [DtoRoute, setDtoRoute] = React.useState("");
    const [JsonNightRidesDetails, setJsonNightRidesDetails] = React.useState("");
    const [JsonConstructorItems, setJsonConstructorItems] = React.useState([]);

    React.useEffect(() => {
        $.ajax({
			url: 'https://26.162.95.213:7099/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			statusCode: {
				200: function(data) {
					setAvailableCountries(data);
				},
				204: function() {
					setAvailableCountries([]);
				}
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
    }, []);
    window.FrameTourContext = React.createContext({
        AvailableCountries: AvailableCountries,
        AvailableSettlements: AvailableSettlements,
        AvailableHotels: AvailableHotels,
        SelectedCountries: SelectedCountries,
        SelectedSettlements: SelectedSettlements,
        SelectedHotels: SelectedHotels,
        DtoTourName: DtoTourName,
        DtoRoute: DtoRoute,
        JsonNightRidesDetails: JsonNightRidesDetails,
        JsonConstructorItems: JsonConstructorItems,
        setAvailableCountries: setAvailableCountries,
        setAvailableSettlements: setAvailableSettlements,
        setAvailableHotels: setAvailableHotels,
        setSelectedCountries: setSelectedCountries,
        setSelectedSettlements: setSelectedSettlements,
        setSelectedHotels: setSelectedHotels,
        setDtoTourName: setDtoTourName,
        setDtoRoute: setDtoRoute,
        setJsonNightRidesDetails: setJsonNightRidesDetails,
        setJsonConstructorItems: setJsonConstructorItems
	});

    return (
        <div id="framePeople">
            <window.FrameTourContext.Provider value={{ 
			 AvailableCountries: AvailableCountries,
             AvailableSettlements: AvailableSettlements,
             AvailableHotels: AvailableHotels,
             SelectedCountries: SelectedCountries,
             SelectedSettlements: SelectedSettlements,
             SelectedHotels: SelectedHotels,
             DtoTourName: DtoTourName,
             DtoRoute: DtoRoute,
             JsonNightRidesDetails: JsonNightRidesDetails,
             JsonConstructorItems: JsonConstructorItems,
             setAvailableCountries: setAvailableCountries,
             setAvailableSettlements: setAvailableSettlements,
             setAvailableHotels: setAvailableHotels,
             setSelectedCountries: setSelectedCountries,
             setSelectedSettlements: setSelectedSettlements,
             setSelectedHotels: setSelectedHotels,
             setDtoTourName: setDtoTourName,
             setDtoRoute: setDtoRoute,
             setJsonNightRidesDetails: setJsonNightRidesDetails,
             setJsonConstructorItems: setJsonConstructorItems
		}}>
                
                    <TourTabNameCaption />
               
            </window.FrameTourContext.Provider>
        </div>
    )
}