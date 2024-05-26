function MainPageContentBlock(props) {
	const [tours, setTours] = React.useState([]);
	const [news, setNews] = React.useState([]);
	const [reviews, setReviews] = React.useState([]);
	const [isDataLoaded, setIsDataLoaded] = React.useState(false);
	const Get11LastActiveTours = async () => {
		try {
			const response = await $.ajax({
				url: 'https://26.162.95.213:7100/api/Tour', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: {
					SearchParameter: 'GetByCompositeSearch',
					TourStateId: 1
				},
				statusCode: {
					200: function (data) {
						// Сортуємо об'єкти за arrivalDate
						data.sort((a, b) => new Date(a.arrivalDate) - new Date(b.arrivalDate));

						// Видаляємо дублікати за tourNameId
						const uniqueTours = data.filter((tour, index, self) =>
							index === self.findIndex(t => t.tourNameId === tour.tourNameId)
						);

						// Отримуємо останні 11 елементів
						const last11Tours = uniqueTours.slice(-11);
						setTours(last11Tours);
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
			console.log("PrepareToEdit success data: ", response);

		} catch (error) {
			console.error('Помилка при отриманні даних', error);
			alert(error.responseText);
		}
	};
	const GetLastActiveToQuantinyPrioritizeIncludeImportant7Items = async () => {
		try {
			const response = await $.ajax({
				url: 'https://26.162.95.213:7100/api/News', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: {
					SearchParameter: 'GetLastActiveToQuantinyPrioritizeIncludeImportant',
					DesiredQuantity: 7
				},
				statusCode: {
					200: function (data) {
						setNews(data);
					},
					204: function () {
						setNews([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
			console.log("PrepareToEdit success data: ", response);

		} catch (error) {
			console.error('Помилка при отриманні даних', error);
			alert(error.responseText);
		}
	};
	const GetLast4Reviews = async () => {
		try {
			const response = await $.ajax({
				url: 'https://26.162.95.213:7100/api/Review', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: {
					SearchParameter: 'Get200Last'
				},
				statusCode: {
					200: function (data) {
						const last4Reviews = data.slice(0, 4);
						setReviews(last4Reviews);
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
			console.log("PrepareToEdit success data: ", response);

		} catch (error) {
			console.error('Помилка при отриманні даних', error);
			alert(error.responseText);
		}
	};
	React.useEffect(async () => {
		await Get11LastActiveTours();
		await GetLastActiveToQuantinyPrioritizeIncludeImportant7Items();
		await GetLast4Reviews();
		setIsDataLoaded(true);
	}, []);
	return (
        isDataLoaded ? (
            <div id="content-block-container">
                <NewsBlock newsList={news} />
                <ToursTableBlock tourList={tours} />
                <TouristsReviewsBlock reviewList={reviews} />
            </div>
        ) : (
            <Loading width="60px" height="60px" />
        )
    );
};
/* Чтобы использовать перенаправление рефов в классовом компоненте, нужно экспортировать forwardRef*/
// export default forwardRef((props, ref) => <MainComponent
// 	targetClubRef={ref} {...props}
// />);