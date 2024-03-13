class AdminPanel extends React.Component {
	constructor(props) {
		super(props);
		this.TabContainerRef = React.createRef();
		this.setDataFromTab = this.setDataFromTab.bind(this);
	}
	setDataFromTab = (data) => 
	{
		this.targetClubRef.setState({ 
			name: data.name,
			tabIconUrl:data.tabIconUrl
		});
	}
	render() 
	{
		return (
			<div id="adminPanel">
				<AdminPanelTabMenu sendDataToAdminPanelComponent={this.setDataFromTab} tabs={this.props.tabs}/>
				<AdminPanelTabContainer ref={this.TabContainerRef} tabs={this.props.tabs}/>
			</div>
		)
	}
}