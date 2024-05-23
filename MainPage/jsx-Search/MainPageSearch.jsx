function MainPageSearch(props) {
    const [isOpened, setIsOpened] = React.useState(false);
    const [selectedCountryId, setSelectedCountryId] = React.useState(0);
    const [selectedDateFrom, setSelectedDateFrom] = React.useState(null);
    const [selectedDateTo, setSelectedDateTo] = React.useState(null);
    const [selectedStars, setSelectedStars] = React.useState([]);
    const [selectedFoodServices, setSelectedFoodServices] = React.useState([]);
    const [selectedTransportType, setSelectedTransportType] = React.useState(null);
    const [selectedOtherServices, setSelectedOtherServices] = React.useState([]);
    const handleChange = (event) => {
        const { name, value, checked } = event.target;

        switch (name) {
            case 'foodService':
                const selectedFoodServiceId = parseInt(value);
                const updatedSelectedFoodServices = checked
                    ? [...selectedFoodServices, selectedFoodServiceId]
                    : selectedFoodServices.filter(id => id !== selectedFoodServiceId);
                setSelectedFoodServices(updatedSelectedFoodServices);
                console.log("selectedFoodServices: ", updatedSelectedFoodServices);
                break;
            case 'otherService':
                const selectedOtherServiceId = parseInt(value);
                const updatedSelectedOtherServices = checked
                    ? [...selectedOtherServices, selectedOtherServiceId]
                    : selectedOtherServices.filter(id => id !== selectedOtherServiceId);
                setSelectedOtherServices(updatedSelectedOtherServices);
                console.log("selectedOtherServices: ", updatedSelectedOtherServices);
                break;
            case 'transportType':
                const selectedTransportTypeId = parseInt(value);
                setSelectedTransportType(selectedTransportTypeId);
                console.log("Вибраний тип транспорту:", selectedTransportTypeId);
                break;
            case 'star':
                const selectedStar = parseInt(value);
                const updatedSelectedStars = checked
                    ? [...selectedStars, selectedStar]
                    : selectedStars.filter(id => id !== selectedStar);
                setSelectedStars(updatedSelectedStars);
                console.log("selectedStars: ", updatedSelectedStars);
                console.log("selectedStarsToString: ", updatedSelectedStars.toString());
                break;
            case 'dateFrom':
                setSelectedDateFrom(value);
                console.log("selectedDateFrom: ", value);
                break;
            case 'dateTo':
                setSelectedDateTo(value);
                console.log("selectedDateTo: ", value);
                break;
            case 'countryIdSelect':
                setSelectedCountryId(parseInt(value));
                console.log("selectedCountryId: ", value);
                break;
            default:
                break;
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
		if (selectedDateFrom === null && selectedDateTo === null  && selectedCountryId === 0 &&
            selectedStars.length === 0 && selectedFoodServices.length === 0 && selectedTransportType === null && selectedOtherServices.length === 0) {
		}
		else{
            let hotelServicesIds = selectedFoodServices.concat(selectedOtherServices);
			$.ajax({
				url: 'https://26.162.95.213:7100/api/Tour', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { 
                    SearchParameter: 'GetByCompositeSearch',
					ArrivalDate : selectedDateFrom ? selectedDateFrom : null,
					DepartureDate : selectedDateTo ? selectedDateTo : null,
					TourStateId : 1,
                    CountryId: selectedCountryId !== 0 ? selectedCountryId : null,
                    stars: selectedStars.length !== 0 ? selectedStars.toString() : null,
                    hotelServicesIds: hotelServicesIds.length !== 0 ? hotelServicesIds.toString() : null,
                    transportTypeId: selectedTransportType !== null ? selectedTransportType : null
				},
				statusCode: {
					200: function (data) {
						// Сортуємо об'єкти за arrivalDate
						data.sort((a, b) => new Date(a.arrivalDate) -  new Date(b.arrivalDate) );
						context.setTours(data);
					},
					204: function () {
						context.setTours([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
    }

    const context = React.useContext(window.TourListContext);

    return (
        <div style={{ display: "flex" }}>
            <div class="search-bar-wrapper">
                <form style={{ display: "flex", flex: "0.85", flexDirection: "column" }} onSubmit={handleSubmit}>
                    <div class="search-bar">
                        <div class="search-bar-item">
                            <span class="caption">Куди</span><br />
                            <select name="countryIdSelect" id="countryIdSelect" onChange={handleChange}>
                                <option value="0" disabled hidden selected>Виберіть країну</option>
                                {
                                    context.countries.map(item => <option value={item.id}>{item.name}</option>)
                                }
                            </select>
                        </div>
                        <div class="search-bar-item">
                            <span className="caption">Дати проведення туру</span><br />
                            <span>з</span>
                            <input type="date" id="dateFrom" name="dateFrom" min={new Date().toISOString().split('T')[0]} onChange={handleChange} />
                            <span>по</span>
                            <input type="date" id="dateTo" name="dateTo" min={new Date().toISOString().split('T')[0]} onChange={handleChange} />
                        </div>
                        <div>
                            <span></span><br />
                            <input type="submit" value="Знайти тур" />
                        </div>
                    </div>
                    <a onClick={() => setIsOpened(!isOpened)} id="ext-src-button">
                        <div style={{ margin: "10px", textDecorationLine: "underline" }}>Розширений пошук</div>
                    </a>
                    {isOpened && <hr />}
                    {isOpened && <div class="extended-search">
                        <div class="ext-src-column">
                            <div className="extended-search-item">
                                <div className="caption">Категорія готелю</div>
                                <div class="extended-search-input">
                                    {
                                        context.starsLabels.map(item =>
                                            <div class="extended-search-input-item">
                                                <input type="checkbox" value={item.value} class="search-input" name="star" onChange={handleChange} /><br />
                                                <label>{item.label}</label>
                                            </div>)
                                    }
                                </div>
                            </div>
                            <div className="extended-search-item">
                                <div className="caption">{props.Caption}</div>
                                <div class="extended-search-input">
                                    {
                                        context.foodServices.map(item =>
                                            <div class="extended-search-input-item">
                                                <input type="checkbox" value={item.id} name="foodService" class="search-input" onChange={handleChange} /><br />
                                                <label>{item.name}</label>
                                            </div>)
                                    }
                                </div>
                            </div>
                            <div className="extended-search-item">
                                <div class="caption">{props.Caption}</div>
                                <div class="extended-search-input-item" id="search-radio-buttons">
                                    {
                                        context.transportTypes.map(item =>
                                            <div>
                                                <input type="radio" value={item.id} class="search-input" name="transportType" onChange={handleChange} />
                                                <label>{item.name}</label><br />
                                            </div>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="ext-src-column">
                            <div className="">
                                <div class="extended-search-item">
                                    <div class="caption">Послуги</div>
                                    <div class="extended-search-input-item">
                                        {
                                            context.otherServices.map(item =>
                                                <div>
                                                    <input type="checkbox" value={item.id} name="otherService" class="search-input" style={{ marginTop: "20px" }} onChange={handleChange} />
                                                    <label>{item.name}</label><br />
                                                </div>
                                            )

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </form>
            </div>
        </div>
    );
}
