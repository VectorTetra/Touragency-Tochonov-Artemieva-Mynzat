function FrameFeedback(props) {
	let jsonUserData = JSON.parse(localStorage.getItem('userData'));
	const [Reviews, setReviews] = React.useState([]);
	const [Tours, setTours] = React.useState([]);
	const [DtoId, setDtoId] = React.useState(0);
	const [DtoTourId, setDtoTourId] = React.useState(0);
	const [DtoClientId, setDtoClientId] = React.useState(0);
	const [DtoRating, setDtoRating] = React.useState(0);
	const [DtoLikes, setDtoLikes] = React.useState(0);
	const [DtoReviewCaption, setDtoReviewCaption] = React.useState('');
	const [DtoReviewText, setDtoReviewText] = React.useState('');
	const [DtoReviewDate, setDtoReviewDate] = React.useState(new Date());
	const [DtoReviewImages, setDtoReviewImages] = React.useState([]);

	const Get200Last = () => {
		if (jsonUserData.isClient === false) {
			$.ajax({
				url: 'https://26.162.95.213:7099/api/Review', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'Get200Last' },
				statusCode: {
					200: function (data) {
						setReviews(data);
						console.log(data);
					},
					204: function () {
						setReviews([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
		else{
			$.ajax({
				url: 'https://26.162.95.213:7099/api/Reviews', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'GetByCompositeSearch', ClientId: jsonUserData.id },
				statusCode: {
					200: function (data) {
						setReviews(data);
						console.log(data);
					},
					204: function () {
						setReviews([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
	}

	// React.useEffect(() => {
	// 	if (currentUserAccount === "Admin") {
	// 		// Если текущий пользователь - администратор, отображаем все отзывы
	// 		setFeedBack(props.tab.feedback);
	// 		setQuantity(props.tab.feedback.length);
	// 	} else {
	// 		// Иначе фильтруем отзывы по логину текущего пользователя
	// 		const currentUserFeedback = props.tab.feedback.filter(feedback => feedback.login === currentUserAccount);
	// 		setFeedBack(currentUserFeedback);
	// 		setQuantity(currentUserFeedback.length);
	// 	}
	// }, [currentUserAccount, props.tab.feedback]);

	React.useEffect(() => {
		Get200Last();
		if (jsonUserData.isClient === true) {
			$.ajax({
				url: 'https://26.162.95.213:7099/api/Tour', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'GetByCompositeSearch',
					ClientId: jsonUserData.clientId,
					TourStateId: 3
				},
				statusCode: {
					200: function (data) {
						setReviews(data);
						console.log(data);
					},
					204: function () {
						setReviews([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
	},[]);

	return (
		<div id="frameFeedback">
			{jsonUserData.isClient === false ? (
				<div>
					<FrameFeedbackHeader quantity={Reviews.length} />
					<FeedbackSearch feedback={Reviews} />
					<FeedbackList feedback={Reviews} isClient={jsonUserData.isClient} />
				</div>
			) : (
				<div>
					<FrameFeedbackHeader quantity={Reviews.length} />
					<FeedbackForm tab={props.tab} />
					<FeedbackList isClient={jsonUserData.isClient} />
				</div>
			)}
		</div>
	);
};