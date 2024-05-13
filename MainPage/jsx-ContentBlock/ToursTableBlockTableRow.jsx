function ToursTableBlockTableRow(props) {
	const [tourName, setTourName] = React.useState('');
	const [tourNameRoute, setTourNameRoute] = React.useState('');
	// React.useEffect(async () => {
	// 	try {
	// 		const response = await $.ajax({
	// 			url: 'https://26.162.95.213:7099/api/TourName', // Замініть на ваш URL API
	// 			method: 'GET',
	// 			contentType: "application/json",
	// 			data: { SearchParameter: 'GetById', Id: props.tourNameId },
	// 			statusCode: {
	// 				200: function (data) {
	// 					setTourName(data.tourName);
	// 					setTourNameRoute(data.route);
	// 				},
	// 				204: function () {
	// 					setTourName("");
	// 					setTourNameRoute("");
	// 				}
	// 			},
	// 			error: function (error) {
	// 				console.error('Помилка при отриманні даних', error);
	// 				alert(error.responseText);
	// 			}
	// 		});
	// 		console.log("PrepareToEdit success data: ", response);

	// 	} catch (error) {
	// 		console.error('Помилка при отриманні даних', error);
	// 		alert(error.responseText);
	// 	}
	// }, []);

	return (
		<tr className="ToursTableBlockTableRow">
			<td>
				<div className="TableRowDatesCell">
				{new Date(props.arrivalDate).toLocaleDateString('uk-UA')} - {new Date(props.departureDate).toLocaleDateString('uk-UA')}
				</div>

			</td>
			<td>
				<div className="TableRowRouteCell">
					<a href='../Page Tours/ToursItalian.html' className="TableRowRouteCellAnchor">
						{/* {
							<div>{item}</div>
						} */}
						<div>{props.tourName}</div>
					</a>
					<div className="TableRowRouteString">
						{/* {
								this.props.roadmap.join(' - ')
							} */}
						{props.route}
					</div>
				</div>
			</td>
		</tr>
	)

}