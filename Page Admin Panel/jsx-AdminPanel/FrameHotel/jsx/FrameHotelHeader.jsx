function FrameHotelHeader(props) {
	return (
		<div id="frameCountryToolbar">
			<div id="frameCountryToolbarTitleQuantity">
				<div id="frameHotelToolbarTitle">
					Готелі
				</div>
				<div id="frameCountryToolbarQuantity">
					{props.quantity}
				</div>
			</div>
		</div>
	);
};