function PeopleSubTabList(){
	const tab = React.useContext(window.PeopleTabContext);
	return (
		<div className="peopleSubTabList">
			{tab.people.map(person => 
				<PeopleSubTabListItem key={person.id} person={person}/>
			)}
		</div>
	);	
}
