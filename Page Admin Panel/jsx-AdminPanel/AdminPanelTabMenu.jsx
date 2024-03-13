class AdminPanelTabMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTab: this.props.tabs[0]
		};
		this.sendDataToAdminPanel = this.sendDataToAdminPanel.bind(this);
	}

	sendDataToAdminPanel(TabInfo) {
		this.setState({ isDropdownListVisible: false })
		this.props.sendDataToAdminPanelComponent(TabInfo);
	}

	render() {
		return (
			<div id="adminPanelTabMenu">
				<DropdownCaption id="adminPanelTabTogglerDropdownCaption" 
					currentTab={this.state.currentTab}
					sendDataToAdminPanelTabMenuComponent={this.sendDataToAdminPanel}
				/>
				
				
			</div>
		);
	}
}