function DropdownCaption(props){
	const [isDropdownListVisible, setDropdownListVisible] = React.useState(false);

	function sendDataToAdminPanelTabMenu(TabInfo) {
		setDropdownListVisible(false);
		props.sendDataToAdminPanelTabMenuComponent(TabInfo);
	}
	function handleClick() {
		setDropdownListVisible(!isDropdownListVisible);
	}
	return (
		<div>
			<div className="dropdownCaption" onClick={handleClick}>
				<img src={props.currentTab.tabIconUrl}  className="dropdownCaptionIcon" />
				<div className="dropdownCaptionName">{props.currentTab.name}</div>
			</div>
			{
				(isDropdownListVisible === true) ?
				<DropdownList tabs={props.tabs} 
					sendDataToDropdownCaptionComponent={sendDataToAdminPanelTabMenu}
					isVisible={isDropdownListVisible}
				/>
				: null
			}
		</div>
	);
};