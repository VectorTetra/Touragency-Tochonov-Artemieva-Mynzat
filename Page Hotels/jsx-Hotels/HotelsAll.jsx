function HotelsAll(props) {
    const [tourNames, setTourNames] = React.useState([]);
    const Get10TourNames = async () => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7100/api/TourName', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetAll' }
                ,
                statusCode: {
                    200: function (data) {
                        const last11Tours = data.slice(-10); // Отримуємо останні 10 елементів
                        setTourNames(last11Tours);
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
            console.log("Get10TourNames success data: ", response);

        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }

    };
    const GetByTourName = async (tourName) => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7100/api/TourName', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetByName', Name: tourName },
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
            console.log("Get10TourNames success data: ", response);
        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
    };
    window.HotelPageContext = React.createContext({
        tourNames: tourNames,
        setTourNames: setTourNames,
        Get10TourNames: Get10TourNames,
        GetByTourName: GetByTourName
    });
    React.useEffect(() => {
        Get10TourNames();
    }, []);
    return (
        <window.HotelPageContext.Provider value={{
            tourNames: tourNames,
            setTourNames: setTourNames,
            Get10TourNames: Get10TourNames,
            GetByTourName: GetByTourName
        }}>
            <div id="hotels">
                <HotelsLogo logo={props.hotels.logo} />
                <HotelsSearch tours={tourNames} setTours={setTourNames} />
                <HotelsTours tours={tourNames} />
            </div>
        </window.HotelPageContext.Provider>
    );
}   