function HotelAppart(props) {
    const context = React.useContext(window.FrameHotelContext);

    const prepareToEdit = async (e) => {
        e.preventDefault();
        const id = $(e.target).data('id'); // Отримуємо значення data-id
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7099/api/Hotel', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetById', Id: id },
            });
            console.log("PrepareToEdit success data: ", response);
            context.setDtoId(response[0].id);
            context.setDtoName(response[0].name);
            context.setDtoCountryId(response[0].countryId);
            context.setDtoSettlementId(response[0].settlementId);
            context.setDtoTourNameIds(response[0].tourNameIds);
            context.setDtoDescription(response[0].description);
            context.setDtoHotelFoodServicesIds(response[0].foodServicesIds);
            context.setDtoHotelOtherServicesIds(response[0].otherServicesIds);
            context.setDtoHotelImages(response[0].hotelImages);
            context.setDtoBookingIds(response[0].bookingIds);
            context.setDtoHotelConfigurationIds(response[0].hotelConfigurationIds);
            context.setDtoBedConfigurationIds(response[0].bedConfigurationIds);
            context.setDtoStars(response[0].stars);
        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
    }
    const DeleteHotel = async (e) => {
        e.preventDefault();
        if (!confirm('Ви впевнені, що хочете видалити цей готель?')) return;
        const id = $(e.target).data('id');
        try {
            await $.ajax({
                url: 'https://26.162.95.213:7099/api/Hotel/' + id, // Замініть на ваш URL API
                method: 'DELETE',
                success: function (data) {
                    context.Get200Last();
                },
                error: function (error) {
                    console.error('Помилка при видаленні', error);
                    alert(error.responseText);
                }
            });
        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
    }

    return (
        <div className="HotelView">
            <div className="containerHotel">
                {props.hotel.map(hotel => (
                    <div className="blockHotel">
                        <div className="coteinerPhoto">
                            <img src={hotel.hotelImages.length > 0 ? hotel.hotelImages[0].imageUrl : ""} alt={hotel.name} />
                            <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                                <form action="post" className="countryListItemFormButtonBar">
                                    <button className="form-editbutton-small" onClick={prepareToEdit} data-id={hotel.id}></button>
                                    <button className="form-clearbutton-small" onClick={DeleteHotel} data-id={hotel.id}></button>
                                </form>
                            </div>
                        </div>
                        <div className="coteinerText">
                            <h3>{hotel.name}</h3>
                            <p style={{ color: 'darkblue', padding: '10px', fontWeight: "600" }}>{hotel.countryName} / {hotel.settlementName}</p>
                            <div style={{ maxHeight: "225px", overflowY: "auto" }}>
                                {hotel.description.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}<br></br></p>
                                ))}

                            </div>
                            <hr style={{ marginTop: '15px', marginBottom: '15px' }}></hr>
                            <div style={{ padding: '5px' }}>
                                {hotel.foodServices.join(', ')}
                            </div>
                            <div style={{ padding: '5px' }}>{hotel.otherServices.join(', ')}</div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );

}
