function TourTabCaption(props)
{
    // const [isTourTabContentVisible, setTourTabContentVisible] = React.useState(false);
    
    // function handleClick() {
    //     setTourTabContentVisible(!isTourTabContentVisible)
    // }
    // return(
    //     <div className="framePeople-sub-tab">
    //         <div className="framePeople-sub-tab-caption" onClick={handleClick}>
    //             <div className="framePeople-sub-tab-caption-name">Планування турів</div>
    //         </div>
    //         {
    //             isTourTabContentVisible === true && <TourTabContent/>
    //         }
    //     </div>
    // )
    const context = React.useContext(window.TourPlanningContext);
    const [isTourTabNameContentVisible, setTourTabNameContentVisible] = React.useState(true);
    function handleClick() {
        setTourTabNameContentVisible(!isTourTabNameContentVisible)
    }
    return(
        <div className="framePeople-sub-tab">
            <div id="frameCountryToolbarTitleQuantity" onClick={handleClick}>
				<div id="frameCountryToolbarTitle">
					Планування турів
				</div>
                <div id="frameCountryToolbarQuantity">
                    {isTourTabNameContentVisible ? "⬇" : "➡" }
                </div>
			</div>
            <TourTabContent isFormVisible={isTourTabNameContentVisible}/>
        </div>
    )
}