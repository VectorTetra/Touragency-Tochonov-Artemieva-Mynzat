function TourItalianAll(props) {
    let obj = null;
    return (
        <div id="Tours">
            {props.tours.map(it => {
                console.log(it);
                if (it.objType === "logo") { obj = <ToursLogo tourData={props.tourData}/>; return obj; }
                if (it.objType === "calendar") { obj = <ToursCalendar data={it} plannedTours={props.plannedTours}/>; return obj; }
                if (it.objType === "MenuTours") { obj = <TourTabControl data={it} tourData={props.tourData} plannedTours={props.plannedTours}/>; return obj; }
                //if (it.objType === "content") { obj = <TourProgramm data={it} />; return obj; }
                if (it.objType === "children") { obj = <ToursChildren data={it} />; return obj; }
                if (it.objType === "futerContent") { obj = <ToursFuter data={it} />; return obj; }
            })}
        </div>
    )
}