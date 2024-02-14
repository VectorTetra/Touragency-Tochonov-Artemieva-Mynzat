class NewsBlockList extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="news-block-list">
				{
					this.props.newsList.map(item=>
						<News pubDateTime={item.pubDateTime}
						url={item.url} 
						caption={item.caption}/>)
				}
			</div>
		)
	}
	
}