class AdminPanelTabMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDropdownListVisible: false
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
					onClick={() => this.setState({ isDropdownListVisible: !this.state.isDropdownListVisible })} 
				/>
				{this.state.isDropdownListVisible && <DropdownList tabs={this.props.tabs} sendDataToAdminPanelTabMenuComponent={this.sendDataToAdminPanel}/>}
				
			</div>
		);
	}
}