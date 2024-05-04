function TouragentsSubTabSearchBar(props) {
	const [inputIdValue, setInputIdValue] = React.useState(null);
	const [inputFirstnameValue, setInputFirstnameValue] = React.useState("");
	const [inputLastnameValue, setInputLastnameValue] = React.useState("");
	const [inputMiddlenameValue, setInputMiddlenameValue] = React.useState("");
	const [inputTouragentLogin, setinputTouragentLogin] = React.useState("");
	const [inputTouragentPhone, setInputTouragentPhone] = React.useState("");
	const [inputTouragentEmail, setInputTouragentEmail] = React.useState("");
	const [inputPositionName, setInputPositionName] = React.useState("");

	const handleInputIdValue = (event) => {
		setInputIdValue(event.target.value);
	}
	const handleInputFirstnameValue = (event) => {
		setInputFirstnameValue(event.target.value);
	}
	const handleInputLastnameValue = (event) => {
		setInputLastnameValue(event.target.value);
	}
	const handleInputMiddlenameValue = (event) => {
		setInputMiddlenameValue(event.target.value);
	}
	const handleinputTouragentLogin = (event) => {
		setinputTouragentLogin(event.target.value);
	}
	const handleInputTouragentPhone = (event) => {
		setInputTouragentPhone(event.target.value);
	}
	const handleInputTouragentEmail = (event) => {
		setInputTouragentEmail(event.target.value);
	}
	const handleInputSearchById = (event) => {
	}
	const handleInputSearchByOther = (event) => {
	}
	return (
		<form className="EditFormRow searchBarRow" method="post">
			<input type="number" min={1} className="EditFormInput" name="Id" value={inputIdValue} onInput={handleInputIdValue} placeholder="Введіть ID" />
			<div className="EditFormColumn" style={{padding:"5px 0px", justifyContent:"space-between"}}>
				<input className="EditFormInput" name="Firstname" value={inputFirstnameValue} onInput={handleInputFirstnameValue} placeholder="Введіть ім'я" />
				<input className="EditFormInput" name="Lastname" value={inputLastnameValue} onInput={handleInputLastnameValue} placeholder="Введіть прізвище" />
			</div>
			<div className="EditFormColumn" style={{padding:"5px 0px", justifyContent:"space-between"}}>
				<input className="EditFormInput" name="Middlename" value={inputMiddlenameValue} onInput={handleInputMiddlenameValue} placeholder="Введіть по-батькові" />
				<input className="EditFormInput" name="TouragentLogin" value={inputTouragentLogin} onInput={handleinputTouragentLogin} placeholder="Введіть логін турагента" />
			</div>
			<div className="EditFormColumn" style={{padding:"5px 0px", justifyContent:"space-between"}}>
				<input className="EditFormInput" name="TouragentPhone" value={inputTouragentPhone} onInput={handleInputTouragentPhone} placeholder="Введіть номер телефону" />
				<input className="EditFormInput" name="TouragentEmail" value={inputTouragentEmail} onInput={handleInputTouragentEmail} placeholder="Введіть email" />
			</div>

			<input type="submit" className="buttonSearchCity" name="buttonSearchById" value="Пошук по ID" onClick={handleInputSearchById} />
			<input type="submit" className="buttonSearchCity" name="buttonSearchByOther" value="Розширений пошук" onClick={handleInputSearchByOther} />
		</form>
	);
}