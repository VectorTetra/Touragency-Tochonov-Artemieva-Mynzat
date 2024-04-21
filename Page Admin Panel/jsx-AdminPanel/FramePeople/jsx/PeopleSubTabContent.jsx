function PeopleSubTabContent(props){
	return (
		<div className="peopleSubTabContent">
			<React.Suspense fallback={<div>Loading...</div>}>
				<PeopleSubTabEditForm />
				<PeopleSubTabSearchBar/>
				<PeopleSubTabList/>
			</React.Suspense> 
		</div>
	);	
}