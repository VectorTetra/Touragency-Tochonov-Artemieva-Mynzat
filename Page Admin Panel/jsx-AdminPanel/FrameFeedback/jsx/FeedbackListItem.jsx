function FeedbackListItem(props) {
	let context = React.useContext(window.FrameFeedbackContext);
	const prepareToEdit = (e) => {
		e.preventDefault();
		context.setDtoId(props.item.id);
		context.setDtoTourId(props.item.tourId);
		context.setDtoClientId(props.item.clientId);
		context.setDtoRating(props.item.rating);
		context.setDtoLikes(props.item.likes);
		context.setDtoReviewCaption(props.item.reviewCaption);
		context.setDtoReviewText(props.item.reviewText);
		context.setDtoReviewDate(props.item.creationDate);
		context.setDtoReviewImages(props.item.reviewImageUrls);
		context.setDtoReviewImageIds(props.item.reviewImageIds);
	}
	const drawStars = (starsQuantity) => {

		const rows = [];
		for (let i = 0; i < starsQuantity; i++) {
			// note: we are adding a key prop here to allow react to uniquely identify each
			// element in this array. see: https://reactjs.org/docs/lists-and-keys.html
			// Star v1.0 url - https://png.pngtree.com/png-vector/20220926/ourmid/pngtree-shiny-gold-star-clipart-illustration-design-png-image_6216956.png
			rows.push(<Star url="https://clipart.info/images/ccovers/1559839448blue-star-png-3.png" width="20" height="20" />);
		}
		return <div>{rows}</div>;
	}
	const DeleteReview = async (e) => {
		e.preventDefault();
		console.log('DeleteReview props', props);
		if (!confirm('Ви впевнені, що хочете видалити цей відгук?')) return;
		await $.ajax({
			url: 'https://26.162.95.213:7100/api/ReviewImage/DeleteReviewImage/' + props.item.id, // Замініть на ваш URL API
			method: 'DELETE',
			statusCode: {
				200: function (data1) {
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
		const id = props.item.id;
		try {
			await $.ajax({
				url: 'https://26.162.95.213:7100/api/Review/' + id, // Замініть на ваш URL API
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
		<div className="children">
			<div className="children1">
				<div className="left">Поїздка: {new Date(props.item.arrivalDate).toLocaleDateString('uk-UA')} - {new Date(props.item.departureDate).toLocaleDateString('uk-UA')}</div>
				<div className="right">
					<strong>
						Тур: <a href={props.item.linkTour} target="_blank">{props.item.tourName}</a>
					</strong>
				</div>
				{drawStars(props.item.rating)}
			</div>
			<div className="children2">
				<div className="left2" style={{ maxHeight: "225px", overflowY: "auto" }}>
					{props.item.reviewText.split('\n').map((paragraph, index) => (
						<p key={index}>{paragraph}<br></br></p>
					))}
				</div>
			</div>
			<div className="boxphoto">
				{props.item.reviewImages && props.item.reviewImages.length > 0 ? (
					props.item.reviewImages.map((image, index) => (
						<div key={image.id}>
							{/* <img src={image.imagePath} alt={image.id} /> */}
							<React.Suspense fallback={<Loading width="40px" height="40px"/>}>
								<SuspenseImage src={image.imagePath} alt={image.id} />
							</React.Suspense>

						</div>
					))
				) : (
					<div>Немає зображень</div>
				)}
			</div>

			<div className="children3">
				<div className="left">
					<strong style={{ color: '#880000' }}>{props.item.clientTouristNickname}</strong>
				</div>
				<div className="right3">
					{new Date(props.item.creationDate).toLocaleString('uk-UA')}
				</div>
			</div>
			{props.isClient && <div>
				<form action="post" className="countryListItemFormButtonBar">
					<button onClick={prepareToEdit} className="form-editbutton-small" ></button>
					<button onClick={DeleteReview} className="form-clearbutton-small"></button>
				</form>
			</div>}

		</div>
	);
}