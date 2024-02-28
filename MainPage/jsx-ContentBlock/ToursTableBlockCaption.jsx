class ToursTableBlockCaption extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="toursTable-block-caption">
				{this.props.caption}
			</div>
		)
	}
	
}