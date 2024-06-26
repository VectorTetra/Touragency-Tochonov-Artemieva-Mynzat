function PriceTourAll(props) {
    let obj = null;
    return (
        <div id="Price">
            {props.price && props.price.map(it => {
                if (it.objType === "MenuTable") { obj = <PriceTourMenu data={it} plannedTours={props.plannedTours}/>; return obj; }
                if (it.objType === "list") { obj = <PriceTourBody data={it} />; return obj; }
                if (it.objType === "children") { obj = <ToursChildren data={it} />; return obj; }
            })}
        </div>
    )
}