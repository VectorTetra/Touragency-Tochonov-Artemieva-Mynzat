function TourTabNameCaption()
{
    const [isTourTabNameContentVisible, setTourTabNameContentVisible] = React.useState(false);
    const tab = React.useContext(window.TourTabNameContext);
    function handleClick() {
        setTourTabNameContentVisible(!isTourTabNameContentVisible)
    }
    return(
        <div className="frameTour-name-tab">
            <div className="frameTour-name-tab-caption" onClick={handleClick}>
                <div className="frameTour-name-tab-caption">{tab.name}</div>
            </div>
            {
                isTourTabNameContentVisible === true && <TourTabNameContent/>
            }
        </div>
    )
}