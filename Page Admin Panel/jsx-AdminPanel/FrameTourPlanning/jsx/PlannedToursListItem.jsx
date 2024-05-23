function PlannedToursListItem({ tour }) {
    const context = React.useContext(window.TourPlanningContext);
    
    function prepareToEdit(e) {
        e.preventDefault();
		context.setDtoId(tour.id);
		context.setDtoTourNameId(tour.tourNameId);
		// context.setDtoArrivalDate(new Date(tour.arrivalDate).toISOString().split('T')[0]);
		// context.setDtoDepartureDate(new Date(tour.departureDate).toISOString().split('T')[0]);
        // context.setDtoArrivalDate(new Date(tour.arrivalDate).toLocaleDateString('uk-UA'));
        // context.setDtoDepartureDate(new Date(tour.departureDate).toLocaleDateString('uk-UA'));
        context.setDtoArrivalDate(() => {
            const date = new Date(tour.arrivalDate);
            date.setDate(date.getDate() + 1); // додаємо 10 днів до поточної дати
            return date.toISOString().split('T')[0]; // конвертуємо дату в строку у форматі "yyyy-MM-dd"
        });
		context.setDtoDepartureDate(() => {
            const date = new Date(tour.departureDate);
            date.setDate(date.getDate() + 1); // додаємо 10 днів до поточної дати
            return date.toISOString().split('T')[0]; // конвертуємо дату в строку у форматі "yyyy-MM-dd"
        });
        
		context.setDtoFreeSeats(tour.freeSeats);
		context.setDtoTourStateId(tour.tourStateId);
		context.setDtoReviewIds(tour.reviewIds);
		context.setDtoBookingIds(tour.bookingIds);
		context.setDtoClientIds(tour.clientIds);
        console.log("Tour", tour);
    }
    
    async function DeleteTour(e) {
        e.preventDefault();
        if (!confirm("Ви впевнені, що хочете видалити цей план туру?")) return;
        try {
            await $.ajax({
                url: 'https://26.162.95.213:7100/api/Tour/' + tour.id, // Замініть на ваш URL API
                method: 'DELETE',
                success: function (data) {
                },
                error: function (error) {
                    console.error('Помилка при видаленні', error);
                    alert(error.responseText);
                }
            })
        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
        finally {
            context.GetAll();
        }
    }
    return (
        <div className="tourListItemContainer">
            <div className="tourListItem">
                <div className="tourNameFontSize">
                    <p><b>Назва туру:</b><a href={'../Page Tours/ToursItalian.html?id=' + tour.tourNameId}>{tour.tourName}</a></p>
                </div>
                <div className="tourNameFontSize">
                    <p><b>Дата початку туру:</b> {new Date(tour.arrivalDate).toLocaleDateString('uk-UA')}</p>
                </div>
                <div className="tourNameFontSize">
                    <p><b>Дата закінчення туру:</b> {new Date(tour.departureDate).toLocaleDateString('uk-UA')}</p>
                </div>
                <div className="tourNameFontSize">
                    <p><b>Кількість вільних місць: </b> {tour.freeSeats}</p>
                </div>
                <div className="tourNameFontSize">
                    <p><b>Статус туру: </b> {tour.tourState}</p>
                </div>

            </div>
            <form action="post" className="tourListItemFormButtonBar">
                <input type="hidden" name="countryId" value={tour.id} />
                <button type="submit" onClick={prepareToEdit} className="form-editbutton-small"></button>
                <button type="submit" onClick={DeleteTour} className="form-clearbutton-small"></button>
            </form>
        </div>
    );
}
