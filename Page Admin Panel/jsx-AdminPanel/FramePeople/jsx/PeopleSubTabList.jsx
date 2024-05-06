function PeopleSubTabList(){
	const tab = React.useContext(window.PeopleTabContext);
	return (
		<div className="peopleSubTabList">
			{tab.clients.map(person => 
				<PeopleSubTabListItem key={person.id} person={person}/>
			)}
		</div>
	);	
}
