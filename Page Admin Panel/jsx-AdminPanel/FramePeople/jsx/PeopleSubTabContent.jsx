function PeopleSubTabContent(props){
	return (
		<div className="peopleSubTabContent">
			<React.Suspense fallback={<div>Loading...</div>}>
				<PeopleSubTabEditForm />
				<PeopleSubTabList/>
			</React.Suspense> 
		</div>
	);	
}