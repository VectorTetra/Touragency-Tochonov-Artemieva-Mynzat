class ToursTableBlockCaption extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="news-block-caption">
				{this.props.caption}
			</div>
		)
	}
	
}