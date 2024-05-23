function PlannedToursSearchBar(props) {
	const context = React.useContext(window.TourPlanningContext);
    const [TourNameId, setTourNameId] = React.useState(0);
    const [ArrivalDate, setArrivalDate] = React.useState(null);
    const [DepartureDate, setDepartureDate] = React.useState(null);
    const [TourStateId, setTourStateId] = React.useState(0);

    
    function handleInputChange(event) {
        switch (event.target.name) {
            case 'TourIdInput':
                setTourId(event.target.value);
                break;
            case 'TourNameIdInput':
                setTourNameId(event.target.value);
                break;
            case 'ArrivalDateInput':
                setArrivalDate(event.target.value);
                break;
            case 'DepartureDateInput':
                setDepartureDate(event.target.value);
                break;
            case 'FreeSeatsInput':
                setFreeSeats(event.target.value);
                break;
            case 'TourStateInput':
                setTourStateId(event.target.value);
                break;
            default:
                break;
        }
    };

	function handleSearch(event) 
	{
		event.preventDefault();
		if (TourNameId === 0 && ArrivalDate === null && DepartureDate === null  && TourStateId === 0) {
			context.GetAll()
		}
		else{
			$.ajax({
				url: 'https://26.162.95.213:7100/api/Tour', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'GetByCompositeSearch',
					TourNameId: TourNameId !== 0 ? TourNameId : null,
					ArrivalDate : ArrivalDate ? ArrivalDate : null,
					DepartureDate : DepartureDate ? DepartureDate : null,
					TourStateId : TourStateId !== 0 ? TourStateId : null
				},
				statusCode: {
					200: function (data) {
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

    return (
        <form id="tour-edit-form" style={{ margin:"20px 0 20px 0" }}>
			<div id="frameCountryToolbarTitleQuantity">
				<div id="frameCountryToolbarTitle">
					Пошук турів
				</div>
				<div id="frameCountryToolbarQuantity">
					{context.Tours.length} 
				</div>
			</div>
            <div className="EditFormRow">
                <div>Назва Туру:</div>
                <select name="TourNameIdInput" className="EditFormInput" onChange={handleInputChange} value={TourNameId} required >
                    <option value={0} disabled hidden selected>Оберіть назву туру для пошуку</option>
                    {context.TourNames.map((tourName) => {
                        return <option key={tourName.id} value={tourName.id}>{tourName.name}</option>
                    })
                    }
                </select>
            </div>
            <div className="EditFormColumn">
                <div className="EditFormRow" style={{ flex: "1" }}>
                    <div className="tourFormLabel">Дата початку туру: </div>
                    <input type="date" className="EditFormInput" name="ArrivalDateInput" onChange={handleInputChange} value={ArrivalDate} required />
                </div>
                <div className="EditFormRow" style={{ flex: "1" }}>
                    <div className="tourFormLabel">Дата закінчення туру: </div>
                    <input type="date" className="EditFormInput" name="DepartureDateInput" onChange={handleInputChange} value={DepartureDate} required />
                </div>
            </div>
            <div className="EditFormColumn">
                <div className="EditFormRow" style={{ flex: "1" }}>
                    <div className="tourFormLabel">Статус туру: </div>
                    <select className="EditFormInput" name="TourStateInput" onChange={handleInputChange} value={TourStateId}>
                        <option value={0} disabled hidden selected>Оберіть статус туру для пошуку</option>
                        {context.TourStates.map((state) => {
                            return <option key={state.id} value={state.id}>{state.status}</option>
                        })
                        }
                    </select>
                </div>
            </div>

            <div className="EditFormRow">
                <button className="buttonSearchCity" style={{backgroundColor:"blueviolet"}} onClick={handleSearch}>Розширений пошук</button>
            </div>
        </form>
    )
}