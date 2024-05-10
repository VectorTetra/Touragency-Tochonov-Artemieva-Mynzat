function ToursTableBlock(props) {

	return (
		
			/* Якщо тури відсутні, виводимо повідомлення */
			props.tourList.length > 0 &&
			<div id="toursTable-block-container">
				<ToursTableBlockCaption caption="Найближчі гарантовані тури" />
				<ToursTableBlockList tourList={props.tourList} />
			</div>
		

	)


}