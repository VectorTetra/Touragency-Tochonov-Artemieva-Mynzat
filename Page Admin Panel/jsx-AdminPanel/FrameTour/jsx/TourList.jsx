function TourList(props)
{
    const context = React.useContext(window.FrameTourContext);
    return(
        <div className="tourList">
            {
                context.TourNames.map(tour=> 
                    <TourListItem key={tour.id} tour={tour}></TourListItem>
                )
            }
        </div>
    )
}