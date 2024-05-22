function TourListItem({ tour }) {
    const context = React.useContext(window.FrameTourContext);
    const AvailableTransportTypes = context.AvailableTransportTypes.filter(transportType => tour.transportTypeIds.includes(transportType.id));
    const transportNames = AvailableTransportTypes.map(transportType => transportType.name).join(', ');

    const [isGeograficVisible, setGeograficVisible] = React.useState(false);

    function handleClick() {
        setGeograficVisible(!isGeograficVisible);
    }
    
    function prepareToEdit(e) {
        e.preventDefault();
        context.setDtoTourImageIds(tour.tourImageIds);
        context.setDtoDuration(tour.duration);
        context.setDtoCountryIds(tour.countryIds);
        context.setDtoId(tour.id);
        context.setDtoSettlementIds(tour.settlementIds);
        context.setDtoHotelIds(tour.hotelIds);
        context.setDtoCountries(tour.countries);
        context.setDtoSettlements(tour.settlements);
        context.setDtoHotels(tour.hotels);
        context.setDtoTourName(tour.name);
        context.setDtoRoute(tour.route);
        context.setDtoIsHaveNightRides(tour.isHaveNightRides);
        context.setDtoNightRidesCount(tour.nightRidesCount);
        context.setDtoTourIds(tour.tourIds);
        context.setTransportTypeIds(tour.transportTypeIds);
        context.setDtoPageStructureUrl(tour.pageJSONStructureUrl);
    
        fetch(tour.pageJSONStructureUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                context.setJsonConstructorItems(data);
                // Тут ви можете виконати необхідні дії з отриманими даними, наприклад, оновити стан або викликати інші функції
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    
        console.log("Tour", tour);
    }
    
    async function DeleteTour(e) {
        e.preventDefault();
        if (!confirm("Ви впевнені, що хочете видалити цей тур?")) return;
        try {
            await $.ajax({
                url: 'https://26.162.95.213:7100/api/TourName/' + tour.id, // Замініть на ваш URL API
                method: 'DELETE',
                success: function (data) {
                },
                error: function (error) {
                    console.error('Помилка при видаленні', error);
                    alert(error.responseText);
                }
            })
            let formData = new FormData();
            formData.append('ConstructorFilePath', tour.pageJSONStructureUrl);
            await $.ajax({
                url: 'https://26.162.95.213:7100/api/TourName/DeleteJsonConstructorFile', // Замініть на ваш URL API
                method: 'DELETE',
                contentType: false, // Указывает тип содержимого, которое будет передано на сервер. 
                processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
                data: formData,
                success: function (data) {
                },
                error: function (error) {
                    console.error('Помилка при видаленні', error);
                    alert(error.responseText);
                }
            });
        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
        finally {
            context.GetLast200TourNames();
        }
    }
    return (
        <div className="tourListItemContainer">
            <div className="tourListItem">
                <div className="tourNameFontSize">
                    <p><b>Назва туру:</b> {tour.name}</p>
                </div>
                <div className="tourNameFontSize">
                    <p><b>Тривалість туру:</b> {tour.duration} днів</p>
                </div>
                <div className="tourNameFontSize">
                    <p><b>Повний маршрут туру:</b> {tour.route}</p>
                </div>
                <div className="tourNameFontSize">
                    <p><b>Доступні види транспорту : </b> {transportNames}</p>
                </div>
                <div className="tourNameFontSize">
                    <p><b>{tour.isHaveNightRides ? "Нічних переїздів : " + tour.nightRidesCount : "Без нічних переїздів"}</b></p>
                </div>
                {
                    !isGeograficVisible && <div className="form-editbutton" style={{ alignSelf: "baseline", width: "fit-content" }} onClick={handleClick}>Показати країни, міста і готелі </div>
                }
                {
                    isGeograficVisible && <div style={{ backgroundColor: "#fbe0ae", borderRadius: "10px", padding: "10px" }}>
                        <div className="form-editbutton" style={{ alignSelf: "baseline", width: "fit-content" }} onClick={handleClick}>Приховати країни, міста і готелі </div>
                        <p style={{ fontSize: "3vw", fontWeight: "800", margin: "20px 0" }}>Країни:</p>
                        <div className="tourNameFontSize" style={{ display: "flex", flexWrap: "wrap" }}>
                            {tour.countries.map(country =>
                                <span key={country.id} className="flagContainer">
                                    <React.Suspense fallback={<Loading width="2vw" height="2vw" />}>
                                        <SuspenseImage src={country.flagUrl} alt={country.name} />
                                    </React.Suspense>{country.name}</span>
                            )}
                        </div>
                        <p style={{ fontSize: "3vw", fontWeight: "800", margin: "20px 0" }}>Міста:</p>
                        <div className="tourNameFontSize" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                            {tour.settlements.map(settlement =>
                                <span key={settlement.id} className="flagContainer" style={{ display: "flex", alignItems: "center" }}>
                                    <React.Suspense fallback={<Loading width="2vw" height="2vw" />}>
                                        <SuspenseImage src={settlement.countryFlagUrl} alt={settlement.name} />
                                    </React.Suspense>
                                    <span>{settlement.countryName} - {settlement.name}</span>
                                </span>
                            )}
                        </div>
                        <p style={{ fontSize: "3vw", fontWeight: "800", margin: "20px 0" }}>Готелі:</p>
                        <div className="tourNameFontSize" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
                            {tour.hotels.map(hotel =>
                                <span key={hotel.id} className="flagContainer" style={{ display: "flex", alignItems: "center" }}>
                                    <React.Suspense fallback={<Loading width="2vw" height="2vw" />}>
                                        <SuspenseImage src={hotel.countryFlagUrl} alt={hotel.name} />
                                    </React.Suspense>
                                    <span>{hotel.settlementName} - {hotel.name}</span>
                                </span>
                            )}
                        </div>

                    </div>
                }

            </div>
            <form action="post" className="tourListItemFormButtonBar">
                <input type="hidden" name="countryId" value={tour.id} />
                <button type="submit" onClick={prepareToEdit} className="form-editbutton-small"></button>
                <button type="submit" onClick={DeleteTour} className="form-clearbutton-small"></button>
            </form>
        </div>
    );
}
