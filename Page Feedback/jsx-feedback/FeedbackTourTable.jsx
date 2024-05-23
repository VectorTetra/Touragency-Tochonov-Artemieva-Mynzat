function FeedbackTourTable(props) {
    const [tourNames, setTourNames] = React.useState([]);
    React.useEffect(() => {
        $.ajax({
            url: 'https://26.162.95.213:7100/api/TourName', // Замініть на ваш URL API
            method: 'GET',
            contentType: "application/json",
            data: { SearchParameter: 'GetAll' },
            statusCode: {
                200: function (data) {
                    let tourNamesWithRewiews = data.filter(item => item.reviewIds.length > 0);
                    setTourNames(tourNamesWithRewiews);
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
    }, []);
    return (
        tourNames.length === 0 ? <Loading  /> :
        <div className="tableconteiner">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Тур (маршрут)</th>
                        <th>Відгуки</th>
                    </tr>
                </thead>
                <tbody>
                    {tourNames.map(item => (
                        <tr key={item.id}>
                            <td className="column1">
                                {item.countries.map((country, idx) => (
                                    // <img key={idx} src={url} />
                                    <React.Suspense fallback={<Loading width="60px" height="60px" />}>
                                        <SuspenseImage src={country.flagUrl} alt={idx} style={{margin:"0 0 10px 0"}}/>
                                    </React.Suspense>
                                ))}
                            </td>
                            <td className="column2">
                                <div>
                                    <h3><a href={"../Page Tours/ToursItalian.html?id=" + item.id} target="_blank">{item.name}</a></h3>
                                    <p>{item.route}</p>
                                </div>
                            </td>
                            <td className="column3">
                                <div>
                                    <a href={"./Feedback.html?tourNameId=" + item.id}>Подивитись всі відгуки</a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
