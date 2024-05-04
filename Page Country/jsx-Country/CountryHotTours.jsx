function CountryHotTours(props) {
    const tourList = props.tours.filter(tour => tour.roadmapCountries && tour.roadmapCountries.includes(props.nameCountry));
    if (tourList.length!=0) {
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