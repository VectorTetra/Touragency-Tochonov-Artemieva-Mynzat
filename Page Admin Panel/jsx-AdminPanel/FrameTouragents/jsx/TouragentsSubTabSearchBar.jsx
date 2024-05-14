function TouragentsSubTabSearchBar(props) {
	// const [inputIdValue, setInputIdValue] = React.useState(null);
	let context = React.useContext(window.TouragentsTabContext);
	const [inputFirstnameValue, setInputFirstnameValue] = React.useState("");
	const [inputLastnameValue, setInputLastnameValue] = React.useState("");
	const [inputMiddlenameValue, setInputMiddlenameValue] = React.useState("");
	const [inputTouragentLogin, setinputTouragentLogin] = React.useState("");
	const [inputTouragentPhone, setInputTouragentPhone] = React.useState("");
	const [inputTouragentEmail, setInputTouragentEmail] = React.useState("");
	// const [inputPositionName, setInputPositionName] = React.useState("");

	// const handleInputIdValue = (event) => {
	// 	setInputIdValue(event.target.value);
	// }
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
	// const handleInputSearchById = (event) => {
	// }
	const handleInputSearchByOther = (event) => {
		event.preventDefault();
		console.log("inputFirstnameValue: ", inputFirstnameValue);
		console.log("inputLastnameValue: ", inputLastnameValue);
		console.log("inputMiddlenameValue: ", inputMiddlenameValue);
		console.log("inputTouragentLogin: ", inputTouragentLogin);
		console.log("inputTouragentPhone: ", inputTouragentPhone);
		console.log("inputTouragentEmail: ", inputTouragentEmail);
		if (inputFirstnameValue === "" && inputLastnameValue === "" && inputMiddlenameValue === "" && inputTouragentLogin === "" && inputTouragentPhone === "" && inputTouragentEmail === "") {
			{
				console.log("Search by Get200Last");
				context.Get200LastTouragents();
			}
		}
		else{
			console.log("Search by Composite Search");
				$.ajax({
					url: 'https://26.162.95.213:7099/api/TouragencyEmployee', // Замініть на ваш URL API
					method: 'GET',
					contentType: "application/json",
					data: {
						SearchParameter: 'GetByCompositeSearch',
						EmployeeFirstname: inputFirstnameValue,
						EmployeeLastname: inputLastnameValue,
						EmployeeMiddlename: inputMiddlenameValue,
						EmployeeAccountLogin: inputTouragentLogin,
						EmployeeEmail: inputTouragentEmail,
						EmployeePhone: inputTouragentPhone
					},
					statusCode: {
						200: function (data) {
							context.setTouragents(data);
						},
						204: function () {
							context.setTouragents([]);
						}
					},
					error: function (error) {
						console.error('Помилка при отриманні даних', error);
						alert(error.responseText);
					}
				});
		}
	}
	return (
		<form className="EditFormRow searchBarRow" method="post">
			{/* <input type="number" min={1} className="EditFormInput" name="Id" value={inputIdValue} onInput={handleInputIdValue} placeholder="Введіть ID" /> */}
			<div className="EditFormColumn" style={{ padding: "5px 0px", justifyContent: "space-between" }}>
				<input className="EditFormInput" name="Firstname" value={inputFirstnameValue} onInput={handleInputFirstnameValue} placeholder="Введіть ім'я" />
				<input className="EditFormInput" name="Lastname" value={inputLastnameValue} onInput={handleInputLastnameValue} placeholder="Введіть прізвище" />
			</div>
			<div className="EditFormColumn" style={{ padding: "5px 0px", justifyContent: "space-between" }}>
				<input className="EditFormInput" name="Middlename" value={inputMiddlenameValue} onInput={handleInputMiddlenameValue} placeholder="Введіть по-батькові" />
				<input className="EditFormInput" name="TouragentLogin" value={inputTouragentLogin} onInput={handleinputTouragentLogin} placeholder="Введіть логін турагента" />
			</div>
			<div className="EditFormColumn" style={{ padding: "5px 0px", justifyContent: "space-between" }}>
				<input className="EditFormInput" name="TouragentPhone" value={inputTouragentPhone} onInput={handleInputTouragentPhone} placeholder="Введіть номер телефону" />
				<input className="EditFormInput" name="TouragentEmail" value={inputTouragentEmail} onInput={handleInputTouragentEmail} placeholder="Введіть email" />
			</div>

			{/* <input type="submit" className="buttonSearchCity" name="buttonSearchById" value="Пошук по ID" onClick={handleInputSearchById} /> */}
			<input type="submit" className="buttonSearchCity" name="buttonSearchByOther" value="Розширений пошук" onClick={handleInputSearchByOther} />
		</form>
	);

}