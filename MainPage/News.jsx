class News extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="news">
				<div>
					{this.props.pubDateTime}
				</div>
				<div>
					<a href={this.props.url}>
						{this.props.caption}	
					</a>
				</div>
				<hr style={{width:'95%'}}/>
			</div>
		)
	}
	
}