function TouragentsSubTabEditForm(props) {
	let context = React.useContext(window.TouragentsTabContext);
	const [id, setId] = React.useState(0); // This will be updated programmatically
	const [TouragentPersonId, setTouragentPersonId] = React.useState(0);
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [middleName, setMiddleName] = React.useState('');
	const [touragentLogin, setTouragentLogin] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [positionId, setPositionId] = React.useState(0);
	const [positions, setPositions] = React.useState([]);
	React.useEffect(() => {
		$.ajax({
			url: 'https://26.162.95.213:7099/api/Position', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			statusCode: {
				200: function (data) {
					setPositions(data);
				},
				204: function () {
					setPositions([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}, []);

	React.useEffect(() => {
		setId(context.dtoTouragentId);
	},[context.dtoTouragentId]);

	React.useEffect(() => {
		setTouragentPersonId(context.dtoTouragentPersonId);
	},[context.dtoTouragentPersonId]);

	React.useEffect(() => {
		setFirstName(context.dtoTouragentFirstname);
	},[context.dtoTouragentFirstname]);

	React.useEffect(() => {
		setLastName(context.dtoTouragentLastname);
	},[context.dtoTouragentLastname]);

	React.useEffect(() => {
		setMiddleName(context.dtoTouragentMiddlename);
	},[context.dtoTouragentMiddlename]);

	React.useEffect(() => {
		setPhone(context.dtoTouragentPhone);
	},[context.dtoTouragentPhone]);

	React.useEffect(() => {
		setEmail(context.dtoTouragentEmail);
	},[context.dtoTouragentEmail]);

	React.useEffect(() => {
		setPositionId(context.dtoTouragentPositionId);
	},[context.dtoTouragentPositionId]);

	React.useEffect(() => {
		setTouragentLogin(context.dtoTouragentLogin);
	},[context.dtoTouragentLogin]);
	
	const handleInputChange = (event) => {
		switch (event.target.name) {
			case 'id':
				setId(event.target.value);
				break;
			case 'TouragentPersonId':
				setTouragentPersonId(event.target.value);
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
			case 'phone':
				setPhone(event.target.value);
				break;
			case 'email':
				setEmail(event.target.value);
				break;
			case 'positionId':
				setPositionId(event.target.value);
				break;
			case 'touragentLogin':
				setTouragentLogin(event.target.value);
				break;
			default:
				break;
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle the form submission here
	}

	const handleReset = (e) => {
		e.preventDefault();
		console.log('Resetting form');
		console.log('Context', context);
		// context.setDtoTouragentId(0);
		// context.setDtoTouragentPersonId(0);
		// context.setDtoTouragentFirstname('');
		// context.setDtoTouragentLastname('');
		// context.setDtoTouragentMiddlename('');
		// context.setDtoTouragentEmail('');
		// context.setDtoTouragentPhone('');
		// context.setDtoTouragentPositionId(0);
		// context.setDtoTouragentLogin('');
		//context.resetDto();
		setId(0);
		setTouragentPersonId(0);
		setFirstName('');
		setLastName('');
		setMiddleName('');
		setEmail('');
		setPhone('');
		setPositionId(0);
		setTouragentLogin(''); 
	}

	return (
		<form className="touragentsSubTabEditForm" onSubmit={handleSubmit} style={{ border: '1px solid black', borderRadius: '5px' }}>
			<input type="hidden" className="EditFormInput" name="id" value={id} />
			<input type="hidden" className="EditFormInput" name="TouragentPersonId" value={TouragentPersonId} />
			<div className="EditFormRow">
				<div>Ім'я:</div>
				<input type="text" className="EditFormInput" name="firstName" value={firstName} onChange={handleInputChange} required />
			</div>
			<div className="EditFormRow">
				<div>Прізвище:</div>
				<input type="text" className="EditFormInput" name="lastName" value={lastName} onChange={handleInputChange} required />
			</div>
			<div className="EditFormRow">
				<div>По-батькові:</div>
				<input type="text" className="EditFormInput" name="middleName" value={middleName} onChange={handleInputChange} />
			</div>
			<div className="EditFormRow">
				<div>Логін турагента:</div>
				<input type="text" className="EditFormInput" name="touragentLogin" value={touragentLogin} onChange={handleInputChange} />
			</div>
			<div className="EditFormRow">
				<div>Email:</div>
				<input type="text" className="EditFormInput" name="email" value={email} onChange={handleInputChange} />
			</div>
			<div className="EditFormRow">
				<div>Номер телефону:</div>
				<input type="text" className="EditFormInput" name="phone" value={phone} onChange={handleInputChange} />
			</div>
			<div className="EditFormRow">
				<div>Посада:</div>
				<select id="EditFormInputPositionId" className="EditFormInput" name="positionId" value={positionId} required onChange={handleInputChange} >
					<option value="0" disabled hidden>Виберіть посаду</option>
					{positions.map((position) => <option key={position.id} value={position.id}>{position.name}</option>)}
				</select>
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<button type="submit" className="form-savebutton">Зберегти</button>
				<button type="button" onClick={handleReset} className="form-clearbutton">Очистити</button>
			</div>
		</form>
	);
}