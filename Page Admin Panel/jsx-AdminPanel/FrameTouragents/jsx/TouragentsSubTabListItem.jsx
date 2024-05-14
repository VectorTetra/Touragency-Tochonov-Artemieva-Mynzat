function TouragentsSubTabListItem({person}){
	let context = React.useContext(window.TouragentsTabContext);
	const prepareEditForm = () => {
		context.setDtoTouragentId(person.id);
		context.setDtoTouragentPersonId(person.personId);
		context.setDtoTouragentFirstname(person.firstname);
		context.setDtoTouragentLastname(person.lastname);
		context.setDtoTouragentMiddlename(person.middlename);
		context.setDtoTouragentEmail(person.email);
		context.setDtoTouragentPhone(person.phone);
		context.setDtoTouragentLogin(person.accountLogin);
		context.setDtoTouragentPositionId(person.positionId);
		context.setDtoTouragentAccountId(person.accountId);
	};
	const DeleteTouragent = (e) => {
		e.preventDefault();
		if(!confirm(`Ви впевнені, що хочете видалити цього турагента ${person.lastname} ${person.firstname} ${person.middlename} ?`)) return;

		$.ajax({
			url: 'https://26.162.95.213:7099/api/TouragencyEmployee/' + person.id, // Замініть на ваш URL API
			method: 'DELETE',
			success: function(data) {
				context.Get200LastTouragents();
			},
			error: function(error) {
				console.error('Помилка при видаленні', error);
				alert(error.responseText);
			}
		});
	}

	return (
		<div className="peopleSubTabListItem">
			
			<div className="peopleSubTabListItemStatContainer">
				<p><b>Ім'я: </b>{person.firstname}</p>
				<p><b>Прізвище: </b>{person.lastname}</p>
				{person.middlename && <p><b>По-батькові: </b>{person.middlename}</p>}
				<p><b>Логін: </b>{person.accountLogin}</p>
				<p><b>Email: </b>{person.email}</p>
				<p><b>Телефон: </b>{person.phone}</p>
				<p><b>Посада: </b>{person.positionName}</p>
			</div>
			<form action="post" className="cityListItemFormButtonBar">
				<input type="hidden" name="touragentId" value={person.id} />
				<button onClick={prepareEditForm} className="form-editbutton-small"></button>
				<button onClick={DeleteTouragent} className="form-clearbutton-small"></button>
			</form>
		</div>
	);	
}