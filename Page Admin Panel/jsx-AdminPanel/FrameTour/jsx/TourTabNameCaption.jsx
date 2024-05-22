function TourTabNameCaption()
{
    const context = React.useContext(window.FrameTourContext);
    const [isTourTabNameContentVisible, setTourTabNameContentVisible] = React.useState(true);
    function handleClick() {
        setTourTabNameContentVisible(!isTourTabNameContentVisible)
    }
    return(
        <div className="framePeople-sub-tab">
            <div id="frameCountryToolbarTitleQuantity" onClick={handleClick}>
				<div id="frameCountryToolbarTitle">
					Асортимент турів
				</div>
				<div id="frameCountryToolbarQuantity">
					{context.TourNames.length} 
				</div>
                <div id="frameCountryToolbarQuantity">
                    {isTourTabNameContentVisible ? "⬇" : "➡" }
                </div>
			</div>
            <TourTabNameContent isFormVisible={isTourTabNameContentVisible}/>
        </div>
    )
}