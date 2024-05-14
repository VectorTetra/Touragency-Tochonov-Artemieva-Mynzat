function PeopleSubTabEditForm(props) {
	let context = React.useContext(window.PeopleTabContext);
	const [id, setId] = React.useState(0); // This will be updated programmatically
	const [clientId, setClientId] = React.useState(0); // This will be updated programmatically
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [middleName, setMiddleName] = React.useState('');
	const [touristNickname, setTouristNickname] = React.useState('');
	const [clientPhone, setClientPhone] = React.useState('');
	const [clientEmail, setClientEmail] = React.useState('');

	function renameProperties(obj) {
		let newObj = {};
		for (let key in obj) {
			let newKey = key.charAt(0).toUpperCase() + key.slice(1);
			if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
				newObj[newKey] = renameProperties(obj[key]); // рекурсивний виклик для вкладених об'єктів
			} else {
				newObj[newKey] = obj[key];
			}
		}
		return newObj;
	}
	const handleInputChange = (event) => {
		switch (event.target.name) {
			case 'idInput':
				setId(event.target.value);
				break;
			case 'clientIdInput':
				setClientId(event.target.value);
				break;
			case 'firstName':
				setFirstName(event.target.value);
				break;
			case 'lastName':
				setLastName(event.target.value);
				break;
			case 'middleName':
				setMiddleName(event.target.value);
				break;
			case 'touristNickname':
				setTouristNickname(event.target.value);
				break;
			case 'clientPhone':
				setClientPhone(event.target.value);
				break;
			case 'clientEmail':
				setClientEmail(event.target.value);
				break;
			// case 'touristAvatarFile':
			// 	{
			// 		const files = event.target.files;
			// 		const urls = [...touristAvatarFile];
			// 		// Переменная для отслеживания того, были ли не добавлены изображения из-за лимита
			// 		let imagesNotAdded = false;

			// 		for (let i = 0; i < files.length; i++) {
			// 			const file = files[i];
			// 			const reader = new FileReader();

			// 			reader.onload = () => {
			// 				const dataUrl = reader.result;

			// 				// Проверяем, есть ли данные изображения в массиве urls
			// 				if (!urls.includes(dataUrl)) {
			// 					if (urls.length < 1) {
			// 						urls.push(dataUrl);
			// 						setTouristAvatarFile([...urls]);
			// 					} else {
			// 						alert("Досягнут ліміт завантаження зображень (1). Деякі файли не були додані.");
			// 						imagesNotAdded = true; // Устанавливаем флаг, что были не добавлены изображения из-за лимита
			// 					}
			// 				} else {
			// 					alert("Фото " + file.name + " вже додано");
			// 				}
			// 			};

			// 			if (imagesNotAdded) {
			// 				break; // Если уже были не добавлены изображения из-за лимита, выходим из цикла
			// 			}

			// 			reader.readAsDataURL(file);
			// 		}
			// 		event.target.value = null;
			// 	}
			// 	break;
			default:
				break;
		}
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (clientId === 0) {
			alert("Не обрано клієнта для редагування!");
			return;
		}
		let avatarUrl = null;
		var files = document.getElementById("peopleAvatarInput").files;
		if (files.length !== 0) {
			const formData = new FormData();
			formData.append('clientId', clientId);
			formData.append('FormFile', files[0]);
			await $.ajax({
				url: 'https://26.162.95.213:7099/api/Client/UploadAvatarImage', // Замініть на ваш URL API
				method: 'PUT',
				contentType: false, // Указывает тип содержимого, которое будет передано на сервер. 
				processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
				data: formData,
				statusCode: {
					200: function (data) {
						avatarUrl = data;
						avatarUrl = "https://26.162.95.213:7099" + avatarUrl;
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
		let requestArray = null;
		await $.ajax({
			url: 'https://26.162.95.213:7099/api/Client', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetById', Id: clientId },
			statusCode: {
				200: function (data) {
					requestArray = renameProperties(data);
					console.log(requestArray);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
		//alert("requestArray.TouristNickname: " + requestArray[0].TouristNickname);
		let request = requestArray[0];
		request.Person.Emails = [clientEmail];
		request.Person.Phones = [clientPhone];
		request.Person.Firstname = firstName;
		request.Person.Lastname = lastName;
		request.Person.Middlename = middleName;
		request.TouristNickname = touristNickname;
		request.AvatarImagePath = avatarUrl;
		await $.ajax({
			url: 'https://26.162.95.213:7099/api/Client', // Замініть на ваш URL API
			method: 'PUT',
			contentType: "application/json",
			data: JSON.stringify(request),
			success: function(data) {
				context.Get200LastClients();
				console.log(data);
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
		handleReset();

	}

	const handleReset = () => {
		context.setDtoClientId(0);
		context.setDtoClientPersonId(0);
		context.setDtoClientFirstname("");
		context.setDtoClientLastname("");
		context.setDtoClientMiddlename("");
		context.setDtoClientEmail("");
		context.setDtoClientPhone("");
		context.setDtoClientTouristNickname("");
		context.setDtoClientAvatar([]);
	}

	React.useEffect(() => {
		setClientId(context.dtoClientId);
	}, [context.dtoClientId]);

	React.useEffect(() => {
		setId(context.dtoClientPersonId);
	}, [context.dtoClientPersonId]);

	React.useEffect(() => {
		setFirstName(context.dtoClientFirstname);
	}, [context.dtoClientFirstname]);

	React.useEffect(() => {
		setLastName(context.dtoClientLastname);
	}, [context.dtoClientLastname]);

	React.useEffect(() => {
		setMiddleName(context.dtoClientMiddlename);
	}, [context.dtoClientMiddlename]);

	React.useEffect(() => {
		setClientEmail(context.dtoClientEmail);
	}, [context.dtoClientEmail]);

	React.useEffect(() => {
		setClientPhone(context.dtoClientPhone);
	}, [context.dtoClientPhone]);

	React.useEffect(() => {
		setTouristNickname(context.dtoClientTouristNickname);
	}, [context.dtoClientTouristNickname]);


	return (
		<form className="peopleSubTabEditForm" onSubmit={handleSubmit} style={{ border: '1px solid black', borderRadius: '5px' }} enctype="multipart/form-data">
			<input type="hidden" className="EditFormInput" name="idInput" value={id} />
			<input type="hidden" className="EditFormInput" name="clientIdInput" value={clientId} />
			<div className="EditFormRow">
				<div >Ім'я:</div>
				<input type="text" className="EditFormInput" name="firstName" value={firstName} onChange={handleInputChange} required />
			</div>
			<div className="EditFormRow">
				<div >Прізвище:</div>
				<input type="text" className="EditFormInput" name="lastName" value={lastName} onChange={handleInputChange} required />
			</div>
			<div className="EditFormRow">
				<div >По-батькові:</div>
				<input type="text" className="EditFormInput" name="middleName" value={middleName} onChange={handleInputChange} />
			</div>
			<div className="EditFormRow">
				<div >Нік туриста:</div>
				<input type="text" className="EditFormInput" name="touristNickname" value={touristNickname} onChange={handleInputChange} required />
			</div>
			<div className="EditFormRow">
				<div >Номер телефону:</div>
				<input type="tel" className="EditFormInput" name="clientPhone" value={clientPhone} onChange={handleInputChange} placeholder="+380991234567" required />
			</div>
			<div className="EditFormRow">
				<div >Email:</div>
				<input type="email" className="EditFormInput" name="clientEmail" value={clientEmail} onChange={handleInputChange} pattern="^[A-Za-z.-_]{3,}@[A-Za-z]+.[A-Za-z]+$" required />
			</div>
			<div className="EditFormRow">
				<PeopleAvatarInput />
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<button type="submit" className="form-savebutton">Зберегти</button>
				<button type="button" onClick={handleReset} className="form-clearbutton">Очистити</button>
			</div>
		</form>
	);
}