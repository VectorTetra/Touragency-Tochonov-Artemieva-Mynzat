function PeopleSubTabListItem({person}){
	let context = React.useContext(window.PeopleTabContext);
	const prepareEditForm = () => {
		context.setDtoClientId(person.id);
		context.setDtoClientPersonId(person.person.id);
		context.setDtoClientFirstname(person.person.firstname);
		context.setDtoClientLastname(person.person.lastname);
		context.setDtoClientMiddlename(person.person.middlename);
		context.setDtoClientEmail(person.person.emails[0]);
		context.setDtoClientPhone(person.person.phones[0]);
		context.setDtoClientTouristNickname(person.touristNickname);
		if(person.avatarImagePath !== null && person.avatarImagePath !== undefined && person.avatarImagePath !== '')
		{
			context.setDtoClientAvatar([person.avatarImagePath]);
		}
		else
		{
			context.setDtoClientAvatar([]);
		}
	};
	return (
		<div className="peopleSubTabListItem">
			<div>
				<img className="countryListItemFlagImg" src={person.avatarImagePath !== null ? person.avatarImagePath : "../images/AdminPanel-Images/people.png"} alt={person.id} />
			</div>
			<div className="peopleSubTabListItemStatContainer">
				<p>Ім'я: {person.person.firstname}</p>
				<p>Прізвище: {person.person.lastname}</p>
				{person.person.middlename && <p>По-батькові: {person.person.middlename}</p>}
				<p>Нікнейм туриста: {person.touristNickname}</p>
				<p>Email: {person.person.emails[0]}</p>
				<p>Телефон: {person.person.phones[0]}</p>
			</div>
			<form action="post" className="cityListItemFormButtonBar">
				<input type="hidden" name="countryId" value={person.id} />
				<button onClick={prepareEditForm} className="form-editbutton-small"></button>
				{/* <button className="form-clearbutton-small"></button> */}
			</form>
		</div>
	);	
}
