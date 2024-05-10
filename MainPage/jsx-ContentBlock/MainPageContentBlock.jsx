function MainPageContentBlock(props) {
	const [tours, setTours] = React.useState([]);
	const Get11LastActiveTours = async () => {
		try {
			const response = await $.ajax({
				url: 'https://26.162.95.213:7098/api/Tour', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: {
					SearchParameter: 'GetByCompositeSearch',
					TourStateId: 1
				},
				statusCode: {
					200: function (data) {
						const last11Tours = data.slice(-11); // Отримуємо останні 10 елементів
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
	React.useEffect(() => {
		Get11LastActiveTours();
	}, []);
	return (
		<div id="content-block-container">
			<React.Suspense fallback={<div>Loading...</div>}>
				<NewsBlock newsList={props.newsList} />
				<ToursTableBlock tourList={tours} />
				<TouristsReviewsBlock reviewList={props.reviewList} />
			</React.Suspense>
		</div>
	);
};
/* Чтобы использовать перенаправление рефов в классовом компоненте, нужно экспортировать forwardRef*/
// export default forwardRef((props, ref) => <MainComponent
// 	targetClubRef={ref} {...props}
// />);