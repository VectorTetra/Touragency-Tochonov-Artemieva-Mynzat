function PeopleSubTabContent(props){
	return (
		<div className="peopleSubTabContent">
			<React.Suspense fallback={<div>Loading...</div>}>
				{JSON.parse(localStorage.getItem("userData")).isClient === false ?
					<div>
						<PeopleSubTabEditForm />
						<PeopleSubTabSearchBar/>
						<PeopleSubTabList/>
					</div> 
					:
					<div>
						<PeopleSubTabList/>
						<PeopleSubTabEditForm />
					</div>
				}
				
			</React.Suspense> 
		</div>
	);	
}