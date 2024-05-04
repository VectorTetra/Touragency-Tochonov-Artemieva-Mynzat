function HotelsAll(props) {
    const [tours, setTours] = React.useState(props.hotels.tours);
    const [quantity, setQuantity] = React.useState(props.hotels.tours.length);

    return (
        <div id="hotels">
            <HotelsLogo logo={props.hotels.logo} />
            <HotelsSearch tours={props.hotels.tours} setTours={setTours} setQuantity={setQuantity} />
            <HotelsTours tours={tours}/>
        </div>
    );
}   