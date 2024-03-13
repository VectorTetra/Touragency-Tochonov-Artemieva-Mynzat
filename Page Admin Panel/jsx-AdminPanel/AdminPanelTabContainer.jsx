class AdminPanelTabContainer extends React.Component {
	constructor(props) 
	{
		super(props);

	}
	render() {
		return (
			<div id="adminPanelTabContainer">
				<img src={this.state.tabIconUrl} alt={this.state.name} className="tabContainerImg"/>
				<div className="tabContainerCaption">{this.state.name}</div>
			</div>
		);
	}
}