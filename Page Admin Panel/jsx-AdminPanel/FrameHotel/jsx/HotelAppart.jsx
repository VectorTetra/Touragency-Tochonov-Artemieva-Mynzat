function HotelAppart(props) {
    // const [currentIndex, setCurrentIndex] = React.useState(0);
    // const [hotelsToShow, setHotelsToShow] = React.useState([]);
    // const numberHotelsToShow = 4;

    // console.log(props.tour.hotels);

    // React.useEffect(() => {
    //     setHotelsToShow(props.tour.hotels.slice(currentIndex, currentIndex + numberHotelsToShow));
    // }, [currentIndex]);

    // const handleNext = () => {
    //     if (currentIndex + numberHotelsToShow < props.tour.hotels.length) {
    //         setCurrentIndex(currentIndex + 1);
    //     }
    // };

    // const handlePrev = () => {
    //     if (currentIndex > 0) {
    //         setCurrentIndex(currentIndex - 1);
    //     }
    // };

    return (
        <div className="HotelView">
            <div className="containerHotel">
                {props.hotel.map(hotel => (
                    <div className="blockHotel">
                        <div className="coteinerPhoto">
                            <img src={hotel.imgUrl} />
                        </div>
                        <div className="coteinerText">
                            <h3>{hotel.HotelName}</h3>
                            <p style={{ color: 'grey', padding: '10px' }}>{hotel.CountryName} / {hotel.CityName}</p>
                            <p>{hotel.Descriptions}</p>
                            <hr style={{marginTop:'15px', marginBottom:'15px'}}></hr>
                            <div style={{ padding: '5px' }}>{hotel.food}</div>
                            <div style={{ padding: '5px' }}>{hotel.Services.join(', ')}</div>
                            <div style={{ padding: '5px' }}>{hotel.Beds.join(', ')}</div>
                        </div>
                        <div>
                            <form style={{ marginTop: '10px' }} action="post" className="countryListItemFormButtonBar">
                                <button type="submit" style={{ marginRight: '10px' }}>
                                    <img style={{ width: '40px', height: 'auto' }} src="..//Page%20Admin%20Panel/img/edit.png" alt="Редактировать" />
                                </button>
                                <button type="submit" style={{ marginRight: '10px' }}>
                                    <img style={{ width: '40px', height: 'auto' }} src="..//Page%20Admin%20Panel/img/del.png" alt="Удалить" />
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
