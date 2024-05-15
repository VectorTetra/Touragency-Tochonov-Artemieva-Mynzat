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
                <h2><a href={props.tour.tourUrl} target="_blank">{props.tour.name}</a></h2>
            </div>
            <div className="containerHotel">
                {hotelsToShow.map(hotel => (
                    <div className="blockHotel">
                        <div>
                            <img src={hotel.hotelImages.length>0 ? hotel.hotelImages[0].imageUrl : ""} alt={hotel.name} />
                        </div>
                        <div>
                            <h3>{hotel.name}</h3>
                            <p style={{ "color": "grey" }}>{hotel.settlementName} , {hotel.countryName}</p>
                            <p>{hotel.description}</p>
                        </div>
                        <div className="services">
                            <hr />
                            <ul>
                                <h4>Харчування:</h4>
                                {hotel.foodServices.map((service, index) => {
                                    return <li style={{textAlign:"left"}} key={index}>{service}</li>
                                })}
                            </ul>
                            <hr />
                            <ul>
                                <h4>Розваги:</h4>
                                {hotel.otherServices.map((service, index) => {
                                    return <li style={{textAlign:"left"}} key={index}>{service}</li>
                                })}
                            </ul>
                            <hr />
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