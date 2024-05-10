function TourTabCaption()
{
    const [isTourTabContentVisible, setTourTabContentVisible] = React.useState(false);
    const tab = React.useContext(window.TourTabContext);
    function handleClick() {
        setTourTabContentVisible(!isTourTabContentVisible)
    }
    return(
        <div className="frameTour-sub-tab">
            <div className="frameTour-sub-tab-caption" onClick={handleClick}>
                <div className="frameTour-sub-tab-caption">{tab.name}</div>
            </div>
            {
                isTourTabContentVisible === true && <TourTabContent/>
            }
        </div>
    )
}