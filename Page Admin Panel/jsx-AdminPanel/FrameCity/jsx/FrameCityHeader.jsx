function FrameCityHeader(props){
	return (
		<div id="frameCountryToolbar">
			<div id="frameCountryToolbarTitleQuantity">
				<div id="frameCountryToolbarTitle">
					Міста
				</div>
				<div id="frameCountryToolbarQuantity">
					{props.quantity} 
				</div>
			</div>
		</div>
	);
};