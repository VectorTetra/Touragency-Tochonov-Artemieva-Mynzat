function PeopleSubTabSearchBar(props){
	const [inputIdValue, setInputIdValue] = React.useState(null);
	const [inputFirstnameValue, setInputFirstnameValue] = React.useState("");
	const [inputLastnameValue, setInputLastnameValue] = React.useState("");
	const [inputMiddlenameValue, setInputMiddlenameValue] = React.useState("");

	const handleInputIdValue = (event) => 
	{
		setInputIdValue(event.target.value);
	}
	const handleInputFirstnameValue = (event) => 
	{
		setInputFirstnameValue(event.target.value);
	}
	const handleInputLastnameValue = (event) => 
	{
		setInputLastnameValue(event.target.value);
	}
	const handleInputMiddlenameValue = (event) => 
	{
		setInputMiddlenameValue(event.target.value);
	}
	const handleInputSearchById = (event) => 
	{
	}
	const handleInputSearchByOther = (event) => 
	{
	}
	return (
		<form className="EditFormRow searchBarRow" method="post">
			<input type="number" min={1} className="EditFormInput" name="Id" value={inputIdValue} onInput={handleInputIdValue} placeholder="Введіть ID" />
			<input className="EditFormInput" name="Firstname" value={inputFirstnameValue} onInput={handleInputFirstnameValue} placeholder="Введіть ім'я" />
			<input className="EditFormInput" name="Lastname" value={inputLastnameValue} onInput={handleInputLastnameValue} placeholder="Введіть прізвище" />
			<input className="EditFormInput" name="Middlename" value={inputMiddlenameValue} onInput={handleInputMiddlenameValue} placeholder="Введіть по-батькові (необов'язково)" />
			<input type="submit" className="buttonSearchCity" name="buttonSearchById" value="Пошук по ID" onClick={handleInputSearchById} />
			<input type="submit" className="buttonSearchCity" name="buttonSearchByOther" value="Пошук за П.І.Б" onClick={handleInputSearchByOther} />
		</form>
	);
}