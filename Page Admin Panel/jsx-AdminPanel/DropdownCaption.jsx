function DropdownCaption(props){
	const [isDropdownListVisible, setDropdownListVisible] = React.useState(false);

	function sendDataToAdminPanelTabMenu(TabInfo) {
		setDropdownListVisible(false);
		props.sendDataToAdminPanelTabMenuComponent(TabInfo);
	}
	return (
		<div>
			<div className="dropdownCaption" onClick={props.onClick}>
				<img src={props.currentTab.tabIconUrl}  className="dropdownCaptionIcon" />
				<div className="dropdownCaptionName">{props.currentTab.name}</div>
			</div>
			<DropdownList tabs={props.tabs} 
				sendDataToDropdownCaptionComponent={sendDataToAdminPanelTabMenu}
				isVisible={isDropdownListVisible}
			/>
		</div>
	);
};