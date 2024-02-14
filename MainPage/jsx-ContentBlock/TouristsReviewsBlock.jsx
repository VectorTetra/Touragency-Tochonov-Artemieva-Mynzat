class TouristsReviewsBlock extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="touristsReviews-block-container">
				<TouristsReviewsCaption caption="Відгуки"/>
				{
					this.props.reviewList.map(item=> <TouristReview date={item.date}
						caption={item.caption}
						text={item.text} userName={item.userName} points={item.points}/>)
				}
			</div>
		)
	}
	
}