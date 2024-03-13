function DropdownCaption(props){
	return (
		<div className="dropdownCaption">
				<img src={props.currentTab.tabIconUrl}  className="dropdown-item-icon" />
				<div className="dropdown-item-name">{props.currentTab.name}</div>
		</div>
	);
};