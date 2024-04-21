function PeopleSubTabListItem({person}){
	return (
		<div className="peopleSubTabListItem">
			<p>ID: {person.id}</p>
			<p>Ім'я: {person.firstName}</p>
			<p>Прізвище: {person.lastName}</p>
			<p>По-батькові: {person.middleName}</p>
		</div>
	);	
}
