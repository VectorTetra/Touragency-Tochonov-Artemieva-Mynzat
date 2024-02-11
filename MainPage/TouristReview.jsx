class TouristReview extends React.Component{
	constructor(props) {
		super(props);
		this.drawStars = this.drawStars.bind(this);
	}
	drawStars(){
		let s = this.props.points;
		const rows = [];
		for (let i = 0; i < s; i++) {
			// note: we are adding a key prop here to allow react to uniquely identify each
			// element in this array. see: https://reactjs.org/docs/lists-and-keys.html
			rows.push(<Star url="https://png.pngtree.com/png-vector/20220926/ourmid/pngtree-shiny-gold-star-clipart-illustration-design-png-image_6216956.png" width="20" height="20"/>);
		}
		return <div>{rows}</div>;
	}
	render(){
		return(
			<div className="touristsReviews-block-container">
				<div className="boldUserNameReviewCaption">{this.props.userName}</div>
				<div className="touristReviewStarsDateRow">
					<div>{this.drawStars()}</div>	
					<div>{this.props.date}</div>						
				</div>
				<div className="flex-box-column">
					<div className="touristReviewCaptionRow">{this.props.caption}</div>	
					<div className="touristReviewTextRow">{this.props.text}</div>
					<hr style={{width:'95%'}}/>
				</div>
			</div>
		)
	}
	
}