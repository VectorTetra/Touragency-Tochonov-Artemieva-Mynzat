class Star extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(<img className="reviewStar" style={{width:this.props.width+"px", height:this.props.height+"px"}} src={this.props.url} alt="*"/>)
	}
}