class TouristsReviewsBlock extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="touristsReviews-block-container">
				<TouristsReviewsCaption caption="Відгуки"/>
				{
					this.props.reviewList.map(item=> <TouristReview date={item.creationDate}
						caption={item.reviewCaption}
						text={item.reviewText} userName={item.clientTouristNickname} points={item.rating}/>)
				}
			</div>
		)
	}
	
}