function FrameTour(props) {
    window.TourTabContext = React.createContext(props.tab);
    window.TourTabNameContext = React.createContext(props.tab);
    return (
        <div id="framePeople">
            <window.TourTabContext.Provider value={props.tab}>
                
                    <TourTabCaption />
                
            </window.TourTabContext.Provider>
            <window.TourTabNameContext.Provider value={props.tab}>
                
                    <TourTabNameCaption />
               
            </window.TourTabNameContext.Provider>
        </div>
    )
}