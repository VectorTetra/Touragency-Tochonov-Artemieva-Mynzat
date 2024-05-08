function TourList(props)
{
    const tab = React.useContext(window.TuorTabContext);
    return(
        <div className="tourList">
            {
                tab.tour.map(tour=> 
                    <TourListItem key={tour.id} tour={tour}></TourListItem>
                )
            }
        </div>
    )
}