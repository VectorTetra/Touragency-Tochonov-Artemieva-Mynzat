function FeedbackTable(props) {
    let table = props.data.table

    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.size != 0) {
        let paramId = urlParams.keys().next().value;
        let paramValue = urlParams.get(paramId);

        console.log("FeedbackTable paramId: ", paramId);
        console.log("FeedbackTable paramValue: ", paramValue);

        table = props.data.table.filter(feedback => feedback[paramId] && feedback[paramId].includes(paramValue));

        console.log("FeedbackTable table: ", table);
    }
    const drawStars = (starsQuantity) =>{

		const rows = [];
		for (let i = 0; i < starsQuantity; i++) {
			// note: we are adding a key prop here to allow react to uniquely identify each
			// element in this array. see: https://reactjs.org/docs/lists-and-keys.html
			// Star v1.0 url - https://png.pngtree.com/png-vector/20220926/ourmid/pngtree-shiny-gold-star-clipart-illustration-design-png-image_6216956.png
			rows.push(<Star url="https://clipart.info/images/ccovers/1559839448blue-star-png-3.png" width="20" height="20"/>);
		}
		return <div>{rows}</div>;
	}
    return (
        <div>
            {props.reviews.map(item => {
                return (
                    <div className="children">
                        <div className="children1">
                            <div className="left">Поїздка: {new Date(item.arrivalDate).toLocaleDateString('uk-UA')} - {new Date(item.departureDate).toLocaleDateString('uk-UA')}</div>
                            <div className="right">
                                <strong>
                                    Тур: <a href={"../Page%20Tours/ToursItalian.html?tourNameId=" + item.tourNameId} target="_blank">{item.tourName}</a>
                                </strong>
                            </div>
                            {drawStars(item.rating)}
                        </div>
                        <div className="children2">
                            <div
                                className="left2"><h3>{item.reviewCaption}</h3>
                            </div>
                        </div>
                        <div className="children2">
                            <div
                                className="left2">{item.reviewText}
                            </div>
                        </div>

                        <div className="boxphoto">
                            {/* {props.data.photoFeedback.map((image) => (
                                <div key={image.index}>
                                    <img src={image.url} alt={image.alt} />
                                </div>
                            ))} */}
                            {item.reviewImages && item.reviewImages.length > 0 ? (
                                item.reviewImages.map((image, index) => (
                                    <div key={image.id}>
                                        <img src={image.imagePath} alt={image.id} />
                                    </div>
                                ))
                            ) : (
                                <div>Немає зображень</div>
                            )}
                        </div>

                        <div className="children3">
                            <div className="left">
                                <strong style={{ color: '#880000' }}>{item.clientTouristNickname}</strong>
                            </div>
                            <div className="right3">
                                {new Date(item.creationDate).toLocaleString('uk-UA')}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

