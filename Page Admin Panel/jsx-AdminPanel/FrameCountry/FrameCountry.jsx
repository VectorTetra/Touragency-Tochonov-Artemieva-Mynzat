function FrameCountry(props){
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
		<div id="frameCountry">
			<FrameCountryToolbar />
			<CountryEditForm />
		</div>
	);
};