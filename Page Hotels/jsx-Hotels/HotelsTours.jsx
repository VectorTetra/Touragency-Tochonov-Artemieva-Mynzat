function HotelsTours(props) {
    return (
		<div id="toursList">
			{
				props.tours.map((tour, index) => {
					return <HotelsApart key={index} tour={tour}/>
				})
			}
		</div>
	);}