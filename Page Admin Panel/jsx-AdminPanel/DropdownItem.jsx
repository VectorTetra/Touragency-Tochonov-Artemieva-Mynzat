function DropdownItem(props){
	function sendDataToDropdownList(){
		props.sendDataToDropdownListComponent({
			"name":props.name,
			"tabIconUrl":props.tabIconUrl
		});
	}
	return(
		<div className="dropdownItem" onClick={sendDataToDropdownList}>
				<img src={props.iconSrc} alt={props.name} className="dropdownItemIcon" />
				<div className="dropdownItemName">{props.name}</div>
		</div>
	)
}