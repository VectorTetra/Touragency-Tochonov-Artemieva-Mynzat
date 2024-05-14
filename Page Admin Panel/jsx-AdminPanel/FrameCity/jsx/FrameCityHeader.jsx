function FrameCityHeader(props){
	const context = React.useContext(window.FrameCityContext);
	return (
		<div id="frameCountryToolbar">
			<div id="frameCountryToolbarTitleQuantity">
				<div id="frameCountryToolbarTitle">
					Міста
				</div>
				<div id="frameCountryToolbarQuantity">
					{context.settlements.length} 
				</div>
			</div>
		</div>
	);
};