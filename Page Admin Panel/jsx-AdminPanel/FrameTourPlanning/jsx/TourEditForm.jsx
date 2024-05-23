function TourEditForm() {
    const context = React.useContext(window.TourPlanningContext);
    const [TourId, setTourId] = React.useState(0);
    const [TourNameId, setTourNameId] = React.useState(0);
    const [ArrivalDate, setArrivalDate] = React.useState(context.DtoArrivalDate);
    const [DepartureDate, setDepartureDate] = React.useState(context.DtoDepartureDate);
    const [FreeSeats, setFreeSeats] = React.useState(0);
    const [TourStateId, setTourStateId] = React.useState(0);

    React.useEffect(() => {
        setTourId(context.DtoId);
    }, [context.DtoId]);
    React.useEffect(() => {
        setTourNameId(context.DtoTourNameId);
    }, [context.DtoTourNameId]);
    // React.useEffect(() => {
    //     setArrivalDate(context.DtoArrivalDate);
    //     console.log("context ArrivalDate", context.DtoArrivalDate);
    //     console.log("ArrivalDate", ArrivalDate);
    // }, [context.DtoArrivalDate]);
    // React.useEffect(() => {
    //     setDepartureDate(context.DtoDepartureDate);
    // }, [context.DtoDepartureDate]);
    React.useEffect(() => {
        setFreeSeats(context.DtoFreeSeats);
    }, [context.DtoFreeSeats]);
    React.useEffect(() => {
        setTourStateId(context.DtoTourStateId);
    }, [context.DtoTourStateId]);
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
    async function handleSubmit(event) 
    {
        event.preventDefault();

        let DTO = JSON.stringify({
            Id: context.DtoId,
            TourNameId: TourNameId,
            ArrivalDate: ArrivalDate,
            DepartureDate: DepartureDate,
            FreeSeats: FreeSeats,
            TourStateId: TourStateId,
            ReviewIds:context.DtoReviewIds,
            BookingIds:context.DtoBookingIds,
            ClientIds:context.DtoClientIds
        });
        console.log("TourDTO", DTO);    
    
        if (context.DtoId === 0) {
            try {
                await $.ajax({
                    url: 'https://26.162.95.213:7100/api/Tour', // Замініть на ваш URL API
                    method: 'POST',
                    contentType: "application/json",
                    data: DTO
                });
            } catch (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        } else {
            try {
                const responsePut = await $.ajax({
                    url: 'https://26.162.95.213:7100/api/Tour', // Замініть на ваш URL API
                    method: 'PUT',
                    contentType: "application/json",
                    data: DTO
                });
                console.log("responsePut", responsePut);
            } catch (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        }
        context.Reset();
        context.GetAll();
    }
    return (
        <form id="tour-edit-form" style={{ border: '1px solid black', borderRadius: '5px' }} onSubmit={handleSubmit}>
            <input type="hidden" name="TourIdInput" onChange={handleInputChange} value={TourId} />
            <div className="EditFormRow">
                <div>Назва Туру:</div>
                <select name="TourNameIdInput" className="EditFormInput" onChange={handleInputChange} value={TourNameId} required >
                    <option value={0} disabled hidden selected>Оберіть назву туру</option>
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
                    <div className="tourFormLabel">Кількість вільних місць:</div>
                    <input type="number" className="EditFormInput" name="FreeSeatsInput" onChange={handleInputChange} value={FreeSeats} min="0" max="100" required />
                </div>
                <div className="EditFormRow" style={{ flex: "1" }}>
                    <div className="tourFormLabel">Статус туру: </div>
                    <select className="EditFormInput" name="TourStateInput" onChange={handleInputChange} value={TourStateId}>
                        <option value={0} disabled hidden selected>Оберіть статус туру</option>
                        {context.TourStates.map((state) => {
                            return <option key={state.id} value={state.id}>{state.status}</option>
                        })
                        }
                    </select>
                </div>
            </div>

            <div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<input type="submit" id="userFormSubmit" className="form-savebutton" value="Зберегти" />
				<button id="userFormReset" className="form-clearbutton" onClick={()=>{context.Reset();}}>Очистити</button>
			</div>
        </form>
    )
}