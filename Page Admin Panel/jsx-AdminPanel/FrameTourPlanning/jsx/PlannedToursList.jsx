function PlannedToursList(props)
{
    const context = React.useContext(window.TourPlanningContext);
    return(
        <div className="tourList">
            {
                context.Tours.map(tour=> 
                    <PlannedToursListItem key={tour.id} tour={tour}></PlannedToursListItem>
                )
            }
        </div>
    )
}