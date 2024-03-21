function TourItalianAll(props) {
    let obj = null;
    return (
        <div id="Tours">
            {props.tours.map(it => {
                if (it.objType === "logo") { obj = <ToursLogo data={it} />; return obj; }
                if (it.objType === "calendar") { obj = <ToursCalendar data={it} />; return obj; }
                if (it.objType === "MenuTours") { obj = <ToursNavPanel data={it} />; return obj; }
                if (it.objType === "content") { obj = <TourProgramm data={it} />; return obj; }
                if (it.objType === "children") { obj = <ToursChildren data={it} />; return obj; }
                if (it.objType === "futerContent") { obj = <ToursFuter data={it} />; return obj; }
            })}
        </div>
    )
}