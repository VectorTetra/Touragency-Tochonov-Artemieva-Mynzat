class NewsBlock extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="news-block-container">
				<NewsBlockCaption caption="Новини"/>
				<NewsBlockList newsList={this.props.newsList}/>
			</div>
		)
	}
	
}