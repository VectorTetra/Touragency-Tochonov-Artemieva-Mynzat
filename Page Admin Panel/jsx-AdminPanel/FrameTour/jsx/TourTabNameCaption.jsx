function TourTabNameCaption()
{
    const [isTourTabNameContentVisible, setTourTabNameContentVisible] = React.useState(false);
    function handleClick() {
        setTourTabNameContentVisible(!isTourTabNameContentVisible)
    }
    return(
        <div className="framePeople-sub-tab">
            <div className="framePeople-sub-tab-caption" onClick={handleClick}>
                <div className="framePeople-sub-tab-caption-name">Назви турів</div>
            </div>
            {
                isTourTabNameContentVisible === true && <TourTabNameContent/>
            }
        </div>
    )
}