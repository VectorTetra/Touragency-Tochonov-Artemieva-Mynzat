function PeopleSubTabContent(props){
	return (
		<div className="peopleSubTabContent">
			<React.Suspense fallback={<div>Loading...</div>}></React.Suspense> 
			<PeopleSubTabEditForm/>
			<PeopleSubTabList/>
		</div>
	);	
}