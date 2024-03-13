class DropdownList extends React.Component {
	constructor(props) {
		super(props);
		this.sendDataToAdminPanelTabMenu = this.sendDataToAdminPanelTabMenu.bind(this);
	}
	sendDataToAdminPanelTabMenu(TabInfo) {
		this.props.sendDataToAdminPanelTabMenuComponent(TabInfo);
	}
	render() {
		return (
			<div id="dropdownList" style={{ display: this.props.isVisible ? 'relative' : 'none' }}>
				{this.props.tabs.map(it => (
					<DropdownItem
						iconSrc={it.tabIconUrl}
						name={it.name}
						sendDataToDropdownListComponent={this.sendDataToAdminPanelTabMenu}
					/>
				))}
			</div>
		);
	}
}
