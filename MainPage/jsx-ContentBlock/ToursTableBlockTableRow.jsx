class ToursTableBlockTableRow extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<tr className="ToursTableBlockTableRow">
				<td>
					<div className="TableRowDatesCell">
						{this.props.departureDate} - {this.props.arrivalDate}
					</div>
				</td>
				<td>
					<div className="TableRowRouteCell">
						{
							this.props.tourCaptions.map(item => <a href={this.props.url}>{item}</a>)
						}
						<div className="TableRowRouteString">
							{
								this.props.roadmap.join(' - ')
							}
						</div>
					</div>
				</td>
			</tr>
		)
	}
	
}