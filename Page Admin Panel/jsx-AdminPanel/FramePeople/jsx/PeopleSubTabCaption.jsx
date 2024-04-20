function PeopleSubTabCaption(props){
	const [isPeopleSubTabContentVisible, setPeopleSubTabContentVisible] = React.useState(false);
	function handleClick() {
		setPeopleSubTabContentVisible(!isPeopleSubTabContentVisible);
	}
	return (
		<div>
			<div className="framePeople-sub-tab-caption" onClick={handleClick}>
				<div className="dropdownCaptionName">{props.tabName}</div>
			</div>
			{
				isPeopleSubTabContentVisible === true && <PeopleSubTabContent/>
			}
		</div>
	);	
}