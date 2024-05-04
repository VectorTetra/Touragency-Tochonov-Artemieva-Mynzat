function PeopleSubTabCaption(props){
	const [isPeopleSubTabContentVisible, setPeopleSubTabContentVisible] = React.useState(false);
	function handleClick() {
		setPeopleSubTabContentVisible(!isPeopleSubTabContentVisible);
	}
	const Get200LastClients = () => {
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Client', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'Get200Last' },
			statusCode: {
				200: function (data) {
					setClients(data);
				},
				204: function () {
					setClients([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const GetClientById = (id) => {
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Client', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetById', Id: id },
			statusCode: {
				200: function (data) {
					setClients(data);
				},
				204: function () {
					setClients([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const GetClientsByCompositeSearch = (Firstname, Lastname, Middlename, TouristNickname, Email, Phone) => {
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Client', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetByCompositeSearch', Firstname: Firstname, Lastname: Lastname, Middlename: Middlename, TouristNickname: TouristNickname, Email: Email, Phone: Phone },
			statusCode: {
				200: function (data) {
					setClients(data);
				},
				204: function () {
					setClients([]);
				}
			},
			error: function (error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const [clients, setClients] = React.useState([]);
	const [dtoClientId, setDtoClientId] = React.useState(0);
	const [dtoClientPersonId, setDtoClientPersonId] = React.useState(0);
	const [dtoClientFirstname, setDtoClientFirstname] = React.useState('');
	const [dtoClientLastname, setDtoClientLastname] = React.useState('');
	const [dtoClientMiddlename, setDtoClientMiddlename] = React.useState('');
	const [dtoClientEmail, setDtoClientEmail] = React.useState('');
	const [dtoClientPhone, setDtoClientPhone] = React.useState('');
	const [dtoClientTouristNickname, setDtoClientTouristNickname] = React.useState('');
	const [dtoClientAvatar, setDtoClientAvatar] = React.useState([]);
	window.PeopleTabContext = React.createContext({
		Get200LastClients: Get200LastClients,
		GetClientById: GetClientById,
		GetClientsByCompositeSearch: GetClientsByCompositeSearch,
		dtoClientId: dtoClientId,
		setDtoClientId: setDtoClientId,
		dtoClientPersonId: dtoClientPersonId,
		setDtoClientPersonId: setDtoClientPersonId,
		dtoClientFirstname: dtoClientFirstname,
		setDtoClientFirstname: setDtoClientFirstname,
		dtoClientLastname: dtoClientLastname,
		setDtoClientLastname: setDtoClientLastname,
		dtoClientMiddlename: dtoClientMiddlename,
		setDtoClientMiddlename: setDtoClientMiddlename,
		dtoClientEmail: dtoClientEmail,
		setDtoClientEmail: setDtoClientEmail,
		dtoClientPhone: dtoClientPhone,
		setDtoClientPhone: setDtoClientPhone,
		dtoClientTouristNickname: dtoClientTouristNickname,
		setDtoClientTouristNickname: setDtoClientTouristNickname,
		dtoClientAvatar: dtoClientAvatar,
		setDtoClientAvatar: setDtoClientAvatar,
		clients: clients,
		setClients: setClients
	});
	return (
		<window.PeopleTabContext.Provider value={{
			Get200LastClients: Get200LastClients,
			GetClientById: GetClientById,
			GetClientsByCompositeSearch: GetClientsByCompositeSearch,
			dtoClientId: dtoClientId,
			setDtoClientId: setDtoClientId,
			dtoClientPersonId: dtoClientPersonId,
			setDtoClientPersonId: setDtoClientPersonId,
			dtoClientFirstname: dtoClientFirstname,
			setDtoClientFirstname: setDtoClientFirstname,
			dtoClientLastname: dtoClientLastname,
			setDtoClientLastname: setDtoClientLastname,
			dtoClientMiddlename: dtoClientMiddlename,
			setDtoClientMiddlename: setDtoClientMiddlename,
			dtoClientEmail: dtoClientEmail,
			setDtoClientEmail: setDtoClientEmail,
			dtoClientPhone: dtoClientPhone,
			setDtoClientPhone: setDtoClientPhone,
			dtoClientTouristNickname: dtoClientTouristNickname,
			setDtoClientTouristNickname: setDtoClientTouristNickname,
			dtoClientAvatar: dtoClientAvatar,
			setDtoClientAvatar: setDtoClientAvatar,
			clients: clients,
			setClients: setClients
		}}>
		<div className="framePeople-sub-tab">
			<div className="framePeople-sub-tab-caption" onClick={handleClick}>
				<div className="framePeople-sub-tab-caption-name">Клієнти</div>
			</div>
			{
				isPeopleSubTabContentVisible === true && <PeopleSubTabContent/>
			}
		</div>
		</window.PeopleTabContext.Provider>
	);	
}