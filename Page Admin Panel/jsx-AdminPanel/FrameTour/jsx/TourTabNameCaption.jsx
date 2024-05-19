function TourTabNameCaption()
{
    const context = React.useContext(window.FrameTourContext);
    // const [isTourTabNameContentVisible, setTourTabNameContentVisible] = React.useState(false);
    // function handleClick() {
    //     setTourTabNameContentVisible(!isTourTabNameContentVisible)
    // }
    return(
        <div className="framePeople-sub-tab">
            <div id="frameCountryToolbarTitleQuantity">
				<div id="frameCountryToolbarTitle">
					Асортимент турів
				</div>
				<div id="frameCountryToolbarQuantity">
					{context.TourNames.length} 
				</div>
			</div>
            <TourTabNameContent/>
        </div>
    )
}