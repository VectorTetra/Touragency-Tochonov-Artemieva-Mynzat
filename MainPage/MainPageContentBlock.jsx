class MainPageContentBlock extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div id="content-block-container">
				<NewsBlock newsList={this.props.newsList}/>  
				<ToursTableBlock tourList={this.props.tourList}/>  
				<TouristsReviewsBlock reviewList={this.props.reviewList}/>  
			</div>
		)
	}
	
}
/* Чтобы использовать перенаправление рефов в классовом компоненте, нужно экспортировать forwardRef*/
// export default forwardRef((props, ref) => <MainComponent 
// 	targetClubRef={ref} {...props}
// />);