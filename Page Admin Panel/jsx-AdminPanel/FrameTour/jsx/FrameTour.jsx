function FrameTour(props)
{
    window.TourTabContext = React.createContext(props.tab);
    window.TourTabNameContext = React.createContext(props.tab);
    return(
    <div>
        <window.TourTabContext.Provider value={props.tab}>
            <div id="frameTour">
                <TourTabCaption/>
            </div>
        </window.TourTabContext.Provider>
        <window.TourTabNameContext.Provider value={props.tab}>
        <div id="frameTour">
            <TourTabNameCaption/>
        </div>
        </window.TourTabNameContext.Provider>
    </div>
    )
}