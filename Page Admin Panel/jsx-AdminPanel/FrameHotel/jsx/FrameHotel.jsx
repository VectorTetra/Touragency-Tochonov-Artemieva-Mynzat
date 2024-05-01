function FrameHotel(props){
	const [quantity, setQuantity] = React.useState(props.tab.hotels.length);
	const [hotel, setHotel] = React.useState(props.tab.hotels);
	
	return (
		<div id="frameHotel"> 
        
			<FrameHotelHeader quantity={quantity} />
			<HotelEditForm tab={props.tab}/>
			<HotelSearch hotel={props.tab.hotels} setHotel={setHotel} setQuantity={setQuantity}/>
			<HotelAppart hotel={hotel}/>
		</div>
	);
};
