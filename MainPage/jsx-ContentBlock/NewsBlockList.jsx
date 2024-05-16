class NewsBlockList extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="news-block-list">
				{
					this.props.newsList.map(item=>
						<News pubDateTime={new Date(item.publishDateTime).toLocaleString('uk-UA')}
						url={"../Page News/News.html#news" + item.id}
						caption={item.caption}/>)
				}
			</div>
		)
	}
	
}