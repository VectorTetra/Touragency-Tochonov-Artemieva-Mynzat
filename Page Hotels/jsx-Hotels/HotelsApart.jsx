function HotelsApart(props) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [hotelsToShow, setHotelsToShow] = React.useState([]);
    const numberHotelsToShow = 4;

    console.log(props.tour.hotels);

    React.useEffect(() => {
        setHotelsToShow(props.tour.hotels.slice(currentIndex, currentIndex + numberHotelsToShow));
    }, [currentIndex]);

    const handleNext = () => {
        if (currentIndex + numberHotelsToShow < props.tour.hotels.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div>
            <div className="hotelConteinerLogo">
                <h2><a href={props.tour.tourUrl} target="_blank">{props.tour.tourName}</a></h2>
            </div>
            <div className="containerHotel">
                {hotelsToShow.map(hotel => (
                    <div className="blockHotel">
                        <div>
                            <img src={hotel.imgUrl} alt={hotel.HotelName} />
                        </div>
                        <div>
                            <h3>{hotel.HotelName}</h3>
                            <p style={{ "color": "grey" }}>{hotel.HotelGPS}</p>
                            <p>{hotel.Descriptions}</p>
                        </div>
                        <div className="services">
                            <hr />
                            <div>{hotel.food}</div>
                            <div>{hotel.bed}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="buttonContainer">
                <button onClick={handlePrev} disabled={currentIndex === 0}>◀</button>
                <button onClick={handleNext} disabled={currentIndex + numberHotelsToShow >= props.tour.hotels.length}>▶</button>
            </div>
        </div>
    );
}