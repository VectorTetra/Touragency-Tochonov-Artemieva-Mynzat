function FrameCountryToolbar(props){
	// const [isDropdownListVisible, setDropdownListVisible] = React.useState(false);
	// const [currentTab, setCurrentTab] = React.useState(props.tabs[0]);

	// function sendDataToAdminPanelTabMenu(TabInfo) {
	// 	setCurrentTab(TabInfo);
	// 	setDropdownListVisible(false);
	// 	props.sendDataToAdminPanelTabMenuComponent(TabInfo);
	// 	console.log("currentTab: ", TabInfo);
	// }
	// function handleClick() {
	// 	setDropdownListVisible(!isDropdownListVisible);
	// }
	return (
		<div id="frameCountryToolbar">
			<div id="frameCountryToolbarTitleQuantity">
				<div id="frameCountryToolbarTitle">
					Країни
				</div>
				<div id="frameCountryToolbarQuantity">
					{props.quantity} 
				</div>
			</div>
			<div id="frameCountryToolbarButtons">
				<button className="btn btn-green">Додати</button>
			</div>
		</div>
	);
};