function PeopleSubTabListItem({person}){
	return (
		<div className="peopleSubTabListItem">
			<div className="peopleSubTabListItemStatContainer">
				<p>ID: {person.id}</p>
			</div>
			<div className="peopleSubTabListItemStatContainer">
				<p>Ім'я: {person.firstName}</p>
				<p>Прізвище: {person.lastName}</p>
				<p>По-батькові: {person.middleName}</p>
			</div>
			<form action="post" className="cityListItemFormButtonBar">
				<input type="hidden" name="countryId" value={person.id} />
				<button type="submit" className="form-editbutton-small"></button>
				<button type="submit" className="form-clearbutton-small"></button>
			</form>
		</div>
	);	
}
