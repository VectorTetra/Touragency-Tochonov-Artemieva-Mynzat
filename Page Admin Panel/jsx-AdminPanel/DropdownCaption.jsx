function DropdownCaption(props){
	return (
		<div className="dropdownCaption">
				<img src={props.currentTab.tabIconUrl}  className="dropdownCaptionIcon" />
				<div className="dropdownCaptionName">{props.currentTab.name}</div>
		</div>
	);
};