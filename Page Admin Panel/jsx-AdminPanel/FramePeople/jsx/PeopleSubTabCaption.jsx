function PeopleSubTabCaption(props){
	const [isPeopleSubTabContentVisible, setPeopleSubTabContentVisible] = React.useState(false);
	const tab = React.useContext(PeopleTabContext);
	function handleClick() {
		setPeopleSubTabContentVisible(!isPeopleSubTabContentVisible);
	}
	return (
		<div className="framePeople-sub-tab">
			<div className="framePeople-sub-tab-caption" onClick={handleClick}>
				<div className="framePeople-sub-tab-caption-name">{tab.name}</div>
			</div>
			{
				isPeopleSubTabContentVisible === true && <PeopleSubTabContent people={tab.people}/>
			}
		</div>
	);	
}