function TourListItem({tour})
{
    return(
        <div className="tourListItem">
            <div>
                <p>ID: {tour.id}</p>
            </div>
            <div className="tourName">
                <p>{tour.name}</p>
            </div>
            <form action="post" className="tourListItemFormButtonBar">
                <input type="hidden" name="countryId" value={person.id} />
				<button type="submit" className="form-editbutton-small"></button>
				<button type="submit" className="form-clearbutton-small"></button>
            </form>
        </div>
    )
}