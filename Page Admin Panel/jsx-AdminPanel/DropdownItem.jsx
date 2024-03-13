function MainPageHeaderLogo(props){
	function sendDataToDropdownList(){
		props.sendDataToDropdownListComponent({
			"name":props.name,
			"tabIconUrl":props.tabIconUrl
		});
	}
	return(
		<div className="dropdownItem" onClick={sendDataToDropdownList}>
				<img src={props.iconSrc} alt={props.name} className="dropdown-item-icon" />
				<div className="dropdown-item-name">{props.name}</div>
		</div>
	)
}