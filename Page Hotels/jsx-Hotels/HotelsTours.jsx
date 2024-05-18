function HotelsTours(props) {
	let context = React.useContext(window.HotelPageContext);
    return (
		<div id="toursList">
			{
				context.tourNames.map((tour, index) => {
					return <HotelsApart key={index} tour={tour}/>
				})
			}
		</div>
	);}