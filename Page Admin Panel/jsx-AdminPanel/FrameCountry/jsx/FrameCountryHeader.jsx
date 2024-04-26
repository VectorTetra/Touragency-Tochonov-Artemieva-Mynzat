function FrameCountryHeader(props){
	const context = React.useContext(window.FrameCountryContext);
	return (
		<div id="frameCountryToolbar">
			<div id="frameCountryToolbarTitleQuantity">
				<div id="frameCountryToolbarTitle">
					Країни
				</div>
				<div id="frameCountryToolbarQuantity">
					{context.countries.length} 
				</div>
			</div>
		</div>
	);
};