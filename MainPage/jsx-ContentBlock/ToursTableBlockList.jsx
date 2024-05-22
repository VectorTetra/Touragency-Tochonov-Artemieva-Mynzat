class ToursTableBlockList extends React.Component{
	constructor(props) {
		super(props);
		console.log('ToursTableBlockList.props', props);
	}
	
	render(){
		return(
			<table id="toursTableBlockList">
				{
					this.props.tourList.map(item=>
						<ToursTableBlockTableRow departureDate={item.departureDate}
						arrivalDate={item.arrivalDate}
						tourName={item.tourName} route={item.route} tourNameId={item.tourNameId}/>
					)
				}
			</table>
		)
	}
	
}