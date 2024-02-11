class ToursTableBlockList extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<table id="toursTableBlockList">
				{
					this.props.tourList.map(item=>
						
						<ToursTableBlockTableRow departureDate={item.departureDate}
						arrivalDate={item.arrivalDate}
						tourCaptions={item.tourCaptions}
						roadmap={item.roadmap}
						url={item.url}/>
					)
				}
			</table>
		)
	}
	
}