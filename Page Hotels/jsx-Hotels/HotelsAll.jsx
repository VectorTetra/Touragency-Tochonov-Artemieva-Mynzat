function HotelsAll(props) {
    const [tourNames, setTourNames] = React.useState([]);
    const GetTourNames = async () => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7099/api/TourName', // Замініть на ваш URL API
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
            console.log("GetTourNames success data: ", response);

        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
                
    };

    React.useEffect(() => {
        GetTourNames();
    }, []);
    return (
        <div id="hotels">
            <HotelsLogo logo={props.hotels.logo} />
            <HotelsSearch tours={tourNames} setTours={setTourNames} />
            <HotelsTours tours={tourNames}/>
        </div>
    );
}   