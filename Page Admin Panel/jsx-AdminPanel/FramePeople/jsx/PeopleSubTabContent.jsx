function PeopleSubTabContent(props){
	return (
		<div>
			<React.Suspense fallback={<div>Loading...</div>}></React.Suspense> 
			<PeopleSubTabEditForm/>
			<PeopleSubTabList/>
		</div>
	);	
}