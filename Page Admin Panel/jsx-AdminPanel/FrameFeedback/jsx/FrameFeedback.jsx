function FrameFeedback(props) {
	let jsonUserData = JSON.parse(localStorage.getItem('userData'));
	const [Reviews, setReviews] = React.useState([]);
	const [Tours, setTours] = React.useState([]);
	const [DtoId, setDtoId] = React.useState(0);
	const [DtoTourId, setDtoTourId] = React.useState(0);
	const [DtoClientId, setDtoClientId] = React.useState(jsonUserData.isClient ? jsonUserData.clientId : 0);
	const [DtoRating, setDtoRating] = React.useState(5);
	const [DtoLikes, setDtoLikes] = React.useState(0);
	const [DtoReviewCaption, setDtoReviewCaption] = React.useState('');
	const [DtoReviewText, setDtoReviewText] = React.useState('');
	const [DtoReviewDate, setDtoReviewDate] = React.useState(new Date());
	const [DtoReviewImages, setDtoReviewImages] = React.useState([]);
	const [DtoReviewImageIds, setDtoReviewImageIds] = React.useState([]);

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
					console.error('Помилка при отриманні даних', error.responseText);
					alert(error.responseText);
				}
			});
		}
		else {
			$.ajax({
				url: 'https://26.162.95.213:7099/api/Review', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'GetByCompositeSearch', ClientId: jsonUserData.clientId },
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
	const GetById = async (ReviewId) => {
		// await $.ajax({
		// 	url: 'https://26.162.95.213:7099/api/Review', // Замініть на ваш URL API
		// 	method: 'GET',
		// 	contentType: "application/json",
		// 	data: { SearchParameter: 'GetById', Id: ReviewId },
		// 	statusCode: {
		// 		200: function (data) {
		// 			setReviews(data);
		// 			console.log(data);
		// 		},
		// 		204: function () {
		// 			setReviews([]);
		// 		}
		// 	},
		// 	error: function (error) {
		// 		console.error('Помилка при отриманні даних', error);
		// 		alert(error.responseText);
		// 	}
		// });
	};
	const PostReview = async (TourId, Rating, ReviewCaption, ReviewText) => {
		// let request1 = {
		// 	Id: 0,
		// 	TourId: TourId,
		// 	ClientId: jsonUserData.clientId,
		// 	Rating: Rating,
		// 	Likes: DtoLikes,
		// 	ReviewCaption: ReviewCaption,
		// 	ReviewDate: DtoReviewDate,
		// 	ReviewText: ReviewText
		// };
		let request1 = JSON.stringify({
			Id: 0,
			TourId: TourId,
			ClientId: jsonUserData.clientId,
			Rating: Rating,
			Likes: DtoLikes,
			ReviewCaption: ReviewCaption,
			CreationDate: new Date(),
			ReviewText: ReviewText
		});
		let responsedId = null;
		await $.ajax({
			url: 'https://26.162.95.213:7099/api/Review', // Замініть на ваш URL API
			method: 'POST',
			contentType: "application/json",
			data: request1,
			statusCode: {
				200: function (data) {
					responsedId = data.id;
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
		if (document.getElementById('feedbackFormPhotoInput').files.length > 0) {
			let formData = new FormData();
			formData.append('ReviewId', responsedId);
			let files = document.getElementById('feedbackFormPhotoInput').files;
			for (let i = 0; i < files.length; i++) {
				formData.append('FormFiles', files[i]);
			}
			await $.ajax({
				url: 'https://26.162.95.213:7099/api/ReviewImage/UploadReviewImage', // Замініть на ваш URL API
				method: 'POST',
				contentType: false, // Указывает тип содержимого, которое будет передано на сервер. 
				processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
				data: formData,
				statusCode: {
					200: function (data1) {
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}

	};
	const PutReview = async (TourId, Rating, ReviewCaption, ReviewText) => {
		// let request1 = {
		// 	Id: DtoId,
		// 	TourId: TourId,
		// 	ClientId: jsonUserData.clientId,
		// 	Rating: Rating,
		// 	Likes: DtoLikes,
		// 	ReviewCaption: ReviewCaption,
		// 	ReviewDate: DtoReviewDate,
		// 	ReviewText: ReviewText
		// };
		let request1 = JSON.stringify({
			Id: DtoId,
			TourId: TourId,
			ClientId: jsonUserData.clientId,
			Rating: Rating,
			Likes: DtoLikes,
			ReviewCaption: ReviewCaption,
			CreationDate: new Date(),
			ReviewText: ReviewText,
			ReviewImageIds: DtoReviewImageIds
		});
		let responsedId = null;
		await $.ajax({
			url: 'https://26.162.95.213:7099/api/Review', // Замініть на ваш URL API
			method: 'PUT',
			contentType: "application/json",
			data: request1,
			statusCode: {
				200: function (data) {
					responsedId = data.id;
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
		if (document.getElementById('feedbackFormPhotoInput').files.length > 0) {
			let formData = new FormData();
			formData.append('ReviewId', responsedId);
			let files = document.getElementById('feedbackFormPhotoInput').files;
			for (let i = 0; i < files.length; i++) {
				formData.append('FormFiles', files[i]);
			}
			await $.ajax({
				url: 'https://26.162.95.213:7099/api/ReviewImage/UploadReviewImage', // Замініть на ваш URL API
				method: 'PUT',
				contentType: false, // Указывает тип содержимого, которое будет передано на сервер. 
				processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
				data: formData,
				statusCode: {
					200: function (data1) {
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
		else {
			//document.getElementById('ReviewImageIdsLengthLocal').value === "0"
			if ($("#ReviewImageIdsLengthLocal").val() === "0") {
				await $.ajax({
					url: 'https://26.162.95.213:7099/api/ReviewImage/DeleteReviewImage/' + responsedId, // Замініть на ваш URL API
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
			}
		}
	};

	React.useEffect(() => {
		Get200Last();
		console.log("Reviews", Reviews);
		if (jsonUserData.isClient === true) {
			$.ajax({
				url: 'https://26.162.95.213:7099/api/Tour', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: {
					SearchParameter: 'GetByCompositeSearch',
					ClientId: jsonUserData.clientId,
					TourStateId: 3
				},
				statusCode: {
					200: function (data) {
						setTours(data);
						console.log(data);
					},
					204: function () {
						setTours([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
	}, []);
	window.FrameFeedbackContext = React.createContext({
		Get200Last: Get200Last,
		PostReview: PostReview,
		PutReview: PutReview,
		setDtoId: setDtoId,
		setDtoTourId: setDtoTourId,
		setDtoClientId: setDtoClientId,
		setDtoRating: setDtoRating,
		setDtoLikes: setDtoLikes,
		setDtoReviewCaption: setDtoReviewCaption,
		setDtoReviewText: setDtoReviewText,
		setDtoReviewDate: setDtoReviewDate,
		setDtoReviewImages: setDtoReviewImages,
		setDtoReviewImageIds: setDtoReviewImageIds,
		setReviews: setReviews,
		Reviews: Reviews,
		DtoReviewImageIds: DtoReviewImageIds,
		DtoId: DtoId,
		DtoTourId: DtoTourId,
		DtoClientId: DtoClientId,
		DtoRating: DtoRating,
		DtoLikes: DtoLikes,
		DtoReviewCaption: DtoReviewCaption,
		DtoReviewText: DtoReviewText,
		DtoReviewDate: DtoReviewDate,
		DtoReviewImages: DtoReviewImages
	});
	return (
		<window.FrameFeedbackContext.Provider value={{
			Get200Last: Get200Last,
			PostReview: PostReview,
			PutReview: PutReview,
			setDtoId: setDtoId,
			setDtoTourId: setDtoTourId,
			setDtoClientId: setDtoClientId,
			setDtoRating: setDtoRating,
			setDtoLikes: setDtoLikes,
			setDtoReviewCaption: setDtoReviewCaption,
			setDtoReviewText: setDtoReviewText,
			setDtoReviewDate: setDtoReviewDate,
			setDtoReviewImages: setDtoReviewImages,
			setDtoReviewImageIds: setDtoReviewImageIds,
			setReviews: setReviews,
			Reviews: Reviews,
			DtoReviewImageIds: DtoReviewImageIds,
			DtoId: DtoId,
			DtoTourId: DtoTourId,
			DtoClientId: DtoClientId,
			DtoRating: DtoRating,
			DtoLikes: DtoLikes,
			DtoReviewCaption: DtoReviewCaption,
			DtoReviewText: DtoReviewText,
			DtoReviewDate: DtoReviewDate,
			DtoReviewImages: DtoReviewImages
		}}>
			<div id="frameFeedback">
				{jsonUserData.isClient === false ? (
					<div>
						<FrameFeedbackHeader quantity={Reviews.length} />
						<FeedbackSearch feedback={Reviews} />
						<FeedbackList reviews={Reviews} isClient={jsonUserData.isClient} />
					</div>
				) : (
					<div>
						<FrameFeedbackHeader quantity={Reviews.length} />
						<FeedbackForm tours={Tours} jsonUserData={jsonUserData} />
						<FeedbackList reviews={Reviews} isClient={jsonUserData.isClient} />
					</div>
				)}
			</div>
		</window.FrameFeedbackContext.Provider>
	);
};