function DropdownCaption(props){
	const [isDropdownListVisible, setDropdownListVisible] = React.useState(false);
	const [currentTab, setCurrentTab] = React.useState(props.tabs[0]);

	function sendDataToAdminPanelTabMenu(TabInfo) {
		setCurrentTab(TabInfo);
		setDropdownListVisible(false);
		props.sendDataToAdminPanelTabMenuComponent(TabInfo);
	}
	function handleClick() {
		setDropdownListVisible(!isDropdownListVisible);
	}
	return (
		<div>
			<div className="dropdownCaption" onClick={handleClick}>
				<img src={currentTab.tabIconUrl}  className="dropdownCaptionIcon" />
				<div className="dropdownCaptionName">{currentTab.name}</div>
			</div>
			{
				(isDropdownListVisible === true) ?
				<DropdownList tabs={props.tabs} 
					sendDataToDropdownCaptionComponent={sendDataToAdminPanelTabMenu}
					isVisible={isDropdownListVisible}
					currentTab={props.currentTab}
				/>
				: null
			}
		</div>
	);
};