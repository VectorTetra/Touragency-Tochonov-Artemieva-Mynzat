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
	const [touristAvatarFile, setTouristAvatarFile] = React.useState([]);

	const fileInputRef = React.useRef(null);
	const handleButtonClick = () => {
		fileInputRef.current.click();
	};
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
			case 'touristAvatarFile':
				{
					const files = event.target.files;
					const urls = [...touristAvatarFile];
					// Переменная для отслеживания того, были ли не добавлены изображения из-за лимита
					let imagesNotAdded = false;

					for (let i = 0; i < files.length; i++) {
						const file = files[i];
						const reader = new FileReader();

						reader.onload = () => {
							const dataUrl = reader.result;

							// Проверяем, есть ли данные изображения в массиве urls
							if (!urls.includes(dataUrl)) {
								if (urls.length < 1) {
									urls.push(dataUrl);
									setTouristAvatarFile([...urls]);
								} else {
									alert("Досягнут ліміт завантаження зображень (1). Деякі файли не були додані.");
									imagesNotAdded = true; // Устанавливаем флаг, что были не добавлены изображения из-за лимита
								}
							} else {
								alert("Фото " + file.name + " вже додано");
							}
						};

						if (imagesNotAdded) {
							break; // Если уже были не добавлены изображения из-за лимита, выходим из цикла
						}

						reader.readAsDataURL(file);
					}
					event.target.value = null;
				}
				break;
			default:
				break;
		}
	}
	const handleRemoveImage = (index) => {
		const newUrls = [...touristAvatarFile];
		newUrls.splice(index, 1);
		setTouristAvatarFile(newUrls);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle the form submission here
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
	},[context.dtoClientId]);

	React.useEffect(() => {
		setId(context.dtoClientPersonId);
	},[context.dtoClientPersonId]);

	React.useEffect(() => {
		setFirstName(context.dtoClientFirstname);
	},[context.dtoClientFirstname]);

	React.useEffect(() => {
		setLastName(context.dtoClientLastname);
	},[context.dtoClientLastname]);

	React.useEffect(() => {
		setMiddleName(context.dtoClientMiddlename);
	},[context.dtoClientMiddlename]);

	React.useEffect(() => {
		setClientEmail(context.dtoClientEmail);
	},[context.dtoClientEmail]);

	React.useEffect(() => {
		setClientPhone(context.dtoClientPhone);
	},[context.dtoClientPhone]);

	React.useEffect(() => {
		setTouristAvatarFile(context.dtoClientAvatar);
	},[context.dtoClientAvatar]);

	React.useEffect(() => {
		setTouristNickname(context.dtoClientTouristNickname);
	},[context.dtoClientTouristNickname]);

	return (
		<form className="peopleSubTabEditForm" onSubmit={handleSubmit} style={{ border: '1px solid black', borderRadius: '5px' }} enctype="multipart/form-data">
			<input type="hidden" className="EditFormInput" name="idInput" value={id} />
			<input type="hidden" className="EditFormInput" name="clientIdInput" value={clientId} />
			<div className="EditFormRow">
				<label htmlFor="firstNameInput">Ім'я:</label>
				<input type="text" className="EditFormInput" name="firstName" value={firstName} onChange={handleInputChange} required />
			</div>
			<div className="EditFormRow">
				<label htmlFor="lastNameInput">Прізвище:</label>
				<input type="text" className="EditFormInput" name="lastName" value={lastName} onChange={handleInputChange} required />
			</div>
			<div className="EditFormRow">
				<label htmlFor="middleNameInput">По-батькові:</label>
				<input type="text" className="EditFormInput" name="middleName" value={middleName} onChange={handleInputChange} />
			</div>
			<div className="EditFormRow">
				<label htmlFor="touristNicknameInput">Нік туриста:</label>
				<input type="text" className="EditFormInput" name="touristNickname" value={touristNickname} onChange={handleInputChange} required />
			</div>
			<div className="EditFormRow">
				<label htmlFor="clientPhoneInput">Номер телефону:</label>
				<input type="tel" className="EditFormInput" name="clientPhone" value={clientPhone} onChange={handleInputChange} placeholder="+380991234567" required />
			</div>
			<div className="EditFormRow">
				<label htmlFor="clientEmailInput">Email:</label>
				<input type="email" className="EditFormInput" name="clientEmail" value={clientEmail} onChange={handleInputChange} pattern="^[A-Za-z.-_]{3,}@[A-Za-z]+.[A-Za-z]+$" required />
			</div>
			<div className="EditFormRow">
				<label htmlFor="touristAvatarInput">Аватар туриста:</label>
				<input type="file" className="EditFormInput" style={{ display: "none" }} ref={fileInputRef} name="touristAvatarFile" onChange={handleInputChange} />
				<button className="buttonFeedback" type="button" onClick={handleButtonClick}>Завантажити фото</button>
				<div className="EditFormRow">
					<div style={{ marginTop: '20px' }}>
						{touristAvatarFile.map((url, index) => (
							<div key={index} className="image-container" style={{ left: "29.5vw" }}>
								<img src={url} alt={`Зображення ${index + 1}`} className="image" style={{ height: "auto", width: "25vw", minWidth: "25vw", objectFit: "cover" }} />
								<button onClick={() => handleRemoveImage(index)} className="delete-button">
									<span style={{ fontSize: "10vh", fontWeight: "bolder", paddingLeft: "10vh", position: "relative", left: "3vh", top: "-4vh" }}>×</span>
								</button>
							</div>
						))}
					</div>
				</div>

			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<button type="submit" className="form-savebutton">Зберегти</button>
				<button type="button" onClick={handleReset} className="form-clearbutton">Очистити</button>
			</div>
		</form>
	);
}