function DropdownCaption(props){
	const [isDropdownListVisible, setDropdownListVisible] = React.useState(false);

	function sendDataToAdminPanelTabMenu(TabInfo) {
		setDropdownListVisible(false);
		this.props.sendDataToAdminPanelTabMenuComponent(TabInfo);
	}
	return (
		<div>
			<div className="dropdownCaption" onClick={props.onClick}>
				<img src={props.currentTab.tabIconUrl}  className="dropdownCaptionIcon" />
				<div className="dropdownCaptionName">{props.currentTab.name}</div>
			</div>
			<DropdownList tabs={this.props.tabs} 
				sendDataToDropdownCaptionComponent={this.sendDataToAdminPanel}
				isVisible={isDropdownListVisible}
			/>
		</div>
	);
};