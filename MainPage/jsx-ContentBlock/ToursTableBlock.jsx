class ToursTableBlock extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="toursTable-block-container">
				<ToursTableBlockCaption caption="Найближчі гарантовані тури"/>
				<ToursTableBlockList tourList={this.props.tourList}/>
			</div>
		)
	}
	
}