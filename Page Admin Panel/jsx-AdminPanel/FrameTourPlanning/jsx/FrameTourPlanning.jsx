function FrameTourPlanning(props) {
    const [Tours, setTours] = React.useState([]);
    const [TourNames, setTourNames] = React.useState([]);
    const [TourStates, setTourStates] = React.useState([]);
    const [DtoId,setDtoId] = React.useState(0);
    const [DtoTourNameId,setDtoTourNameId] = React.useState(0);
    const [DtoArrivalDate,setDtoArrivalDate] = React.useState(() => {
        return new Date().toISOString().split('T')[0]; // поточна дата у форматі "yyyy-MM-dd"
    });
    const [DtoDepartureDate,setDtoDepartureDate] = React.useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 10); // додаємо 10 днів до поточної дати
        return date.toISOString().split('T')[0]; // конвертуємо дату в строку у форматі "yyyy-MM-dd"
    });
    const [DtoFreeSeats,setDtoFreeSeats] = React.useState(0);
    const [DtoTourStateId,setDtoTourStateId] = React.useState(0);
    const [DtoReviewIds,setDtoReviewIds] = React.useState([]);
    const [DtoBookingIds,setDtoBookingIds] = React.useState([]);
    const [DtoClientIds,setDtoClientIds] = React.useState([]);
    
    const GetAll = () =>{
        $.ajax({
            url: 'https://26.162.95.213:7100/api/Tour', // Замініть на ваш URL API
            method: 'GET',
            contentType: "application/json",
            data: { SearchParameter: 'GetAll' },
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
    }
    const Reset = () =>{
        setDtoId(0);
        setDtoTourNameId(0);
        setDtoArrivalDate(() => {
            return new Date().toISOString().split('T')[0]; // поточна дата у форматі "yyyy-MM-dd"
        });
        setDtoDepartureDate(() => {
            const date = new Date();
            date.setDate(date.getDate() + 10); // додаємо 10 днів до поточної дати
            return date.toISOString().split('T')[0]; // конвертуємо дату в строку у форматі "yyyy-MM-dd"
        });
        setDtoFreeSeats(0);
        setDtoTourStateId(0);
        setDtoReviewIds([]);
        setDtoBookingIds([]);
        setDtoClientIds([]);
    }
    React.useEffect(() => {
        GetAll();
        $.ajax({
            url: 'https://26.162.95.213:7100/api/TourName', // Замініть на ваш URL API
            method: 'GET',
            contentType: "application/json",
            data: { SearchParameter: 'GetAll' },
            statusCode: {
                200: function (data) {
                    data.sort((a, b) => {
                        const tourNameComp = a.name.localeCompare(b.name);
                        return tourNameComp;
                    });
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
        $.ajax({
            url: 'https://26.162.95.213:7100/api/TourState', // Замініть на ваш URL API
            method: 'GET',
            contentType: "application/json",
            data: { SearchParameter: 'GetAll' },
            statusCode: {
                200: function (data) {
                    data.sort((a, b) => {
                        const tourNameComp = a.status.localeCompare(b.status);
                        return tourNameComp;
                    });
                    setTourStates(data);
                },
                204: function () {
                    setTourStates([]);
                }
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });
    },[]);

    window.TourPlanningContext = React.createContext({
        Tours : Tours,
        TourNames : TourNames,
        TourStates : TourStates,
        DtoId : DtoId,
        DtoTourNameId : DtoTourNameId,
        DtoArrivalDate : DtoArrivalDate,
        DtoDepartureDate : DtoDepartureDate,
        DtoFreeSeats : DtoFreeSeats,
        DtoTourStateId : DtoTourStateId,
        DtoReviewIds : DtoReviewIds,
        DtoBookingIds : DtoBookingIds,
        DtoClientIds : DtoClientIds,
        setTours : setTours,
        setTourNames : setTourNames,
        setTourStates : setTourStates,
        setDtoId : setDtoId,
        setDtoArrivalDate : setDtoArrivalDate,
        setDtoDepartureDate : setDtoDepartureDate,
        setDtoFreeSeats : setDtoFreeSeats,
        setDtoTourStateId : setDtoTourStateId,
        setDtoReviewIds : setDtoReviewIds,
        setDtoBookingIds : setDtoBookingIds,
        setDtoClientIds : setDtoClientIds,
        setDtoTourNameId : setDtoTourNameId,
        GetAll : GetAll,
        Reset : Reset
    });
    return (
        <div id="framePeople">
            <window.TourPlanningContext.Provider value={{
                Tours : Tours,
                TourNames : TourNames,
                TourStates : TourStates,
                DtoId : DtoId,
                DtoTourNameId : DtoTourNameId,
                DtoArrivalDate : DtoArrivalDate,
                DtoDepartureDate : DtoDepartureDate,
                DtoFreeSeats : DtoFreeSeats,
                DtoTourStateId : DtoTourStateId,
                DtoReviewIds : DtoReviewIds,
                DtoBookingIds : DtoBookingIds,
                DtoClientIds : DtoClientIds,
                setTours : setTours,
                setTourNames : setTourNames,
                setTourStates : setTourStates,
                setDtoId : setDtoId,
                setDtoArrivalDate : setDtoArrivalDate,
                setDtoDepartureDate : setDtoDepartureDate,
                setDtoFreeSeats : setDtoFreeSeats,
                setDtoTourStateId : setDtoTourStateId,
                setDtoReviewIds : setDtoReviewIds,
                setDtoBookingIds : setDtoBookingIds,
                setDtoClientIds : setDtoClientIds,
                setDtoTourNameId : setDtoTourNameId,
                GetAll : GetAll,
                Reset : Reset
            }}>
                
                    <TourTabCaption />
                
            </window.TourPlanningContext.Provider>
        </div>
    )
}