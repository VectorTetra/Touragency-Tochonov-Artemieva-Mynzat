function DropdownCaption(props){
	return (
		<div className="dropdownCaption" onClick={props.onClick}>
			<img src={props.currentTab.tabIconUrl}  className="dropdownCaptionIcon" />
			<div className="dropdownCaptionName">{props.currentTab.name}</div>
		</div>
	);
};