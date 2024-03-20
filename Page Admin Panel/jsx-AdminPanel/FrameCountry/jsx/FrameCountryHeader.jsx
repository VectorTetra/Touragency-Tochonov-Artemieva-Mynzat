function FrameCountryHeader(props){
	return (
		<div id="frameCountryToolbar">
			<div id="frameCountryToolbarTitleQuantity">
				<div id="frameCountryToolbarTitle">
					Країни
				</div>
				<div id="frameCountryToolbarQuantity">
					{props.quantity} 
				</div>
			</div>
		</div>
	);
};