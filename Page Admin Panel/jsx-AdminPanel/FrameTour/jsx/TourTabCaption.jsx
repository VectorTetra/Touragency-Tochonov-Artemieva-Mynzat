function TourTabCaption()
{
    const [isTourTabContentVisible, setTourTabContentVisible] = React.useState(false);
    const tab = React.useContext(window.TourTabContext);
    function handleClick() {
        setTourTabContentVisible(!isTourTabContentVisible)
    }
    return(
        <div className="framePeople-sub-tab">
            <div className="framePeople-sub-tab-caption" onClick={handleClick}>
                <div className="framePeople-sub-tab-caption-name">{tab.name}</div>
            </div>
            {
                isTourTabContentVisible === true && <TourTabContent/>
            }
        </div>
    )
}