class Star extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(<img src={this.props.url} alt="*" width={this.props.width} height={this.props.height}/>)
	}
}