class Star extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(<img className="reviewStar" src={this.props.url} alt="*"/>)
	}
}