class TouristsReviewsCaption extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="reviews-block-caption">
				{
					this.props.caption
				}
			</div>
		)
	}
}