class AdminPanelTabMenu extends React.Component {
	constructor(props) {
		super(props);
		this.sendDataToAdminPanel = this.sendDataToAdminPanel.bind(this);
	}

	sendDataToAdminPanel(TabInfo) {
		this.props.sendDataToAdminPanelComponent(TabInfo);
	}

	render() {
		return (
			<div id="adminPanelTabMenu">
				<DropdownCaption id="adminPanelTabTogglerDropdownCaption" 
					currentTab={this.props.tabs[0]}
					sendDataToAdminPanelTabMenuComponent={this.sendDataToAdminPanel}
					tabs={this.props.tabs}
				/>
				
				
			</div>
		);
	}
}