function FrameTourPlanning(props) {
    window.TourTabContext = React.createContext(props.tab);
    return (
        <div id="framePeople">
            <window.TourTabContext.Provider value={props.tab}>
                
                    <TourTabCaption />
                
            </window.TourTabContext.Provider>
        </div>
    )
}