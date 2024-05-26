function CountryHotTours(props) {
    //const tourList = props.tours.filter(tour => tour.roadmapCountries && tour.roadmapCountries.includes(props.nameCountry));
    const [tourList, setTourList] = React.useState([]);
    const Get11LastActiveToursByProps = async () => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7100/api/Tour', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: {
                    SearchParameter: 'GetByCompositeSearch',
                    TourStateId: 1,
                    CountryName: props.nameCountry
                },
                statusCode: {
                    200: function (data) {
                        const sortedTours = data.sort((a, b) => new Date(a.arrivalDate) - new Date(b.arrivalDate));

                        // Отримуємо останні 11 турів
                        const last11Tours = sortedTours.slice(0, 11);

                        setTourList(last11Tours);
                    },
                    204: function () {
                        setTourList([]);
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });
            console.log("PrepareToEdit success data: ", response);

        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
    }

    React.useEffect(() => {
        Get11LastActiveToursByProps();
    }, []);

    if (tourList.length != 0) {
        return (<ToursTableBlock tourList={tourList} />)
    }
    else {
        return (
            <div className="tourInfo">
                <p>Ми працюємо над розробкою турів за цим направленням!!!</p>
            </div>
        )
    }
}