function TouragentsSubTabCaption(props) {
	const [isTouragentsSubTabContentVisible, setTouragentsSubTabContentVisible] = React.useState(false);
	function handleClick() {
		setTouragentsSubTabContentVisible(!isTouragentsSubTabContentVisible);
	}
	const Get200LastTouragents = () => {
		$.ajax({
			url: 'https://26.162.95.213:7098/api/TouragencyEmployee', // Замініть на ваш URL API
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
	const [touragents, setTouragents] = React.useState([]);
	const [dtoTouragentId, setDtoTouragentId] = React.useState(0);
	const [dtoTouragentPersonId, setDtoTouragentPersonId] = React.useState(0);
	const [dtoTouragentFirstname, setDtoTouragentFirstname] = React.useState('');
	const [dtoTouragentLastname, setDtoTouragentLastname] = React.useState('');
	const [dtoTouragentMiddlename, setDtoTouragentMiddlename] = React.useState('');
	const [dtoTouragentEmail, setDtoTouragentEmail] = React.useState('');
	const [dtoTouragentPhone, setDtoTouragentPhone] = React.useState('');
	const [dtoTouragentPositionId, setDtoTouragentPositionId] = React.useState(0);
	window.TouragentsTabContext = React.createContext(
		{
			touragents: touragents,
			dtoTouragentId: dtoTouragentId,
			dtoTouragentPersonId: dtoTouragentPersonId,
			dtoTouragentFirstname: dtoTouragentFirstname,
			dtoTouragentLastname: dtoTouragentLastname,
			dtoTouragentMiddlename: dtoTouragentMiddlename,
			dtoTouragentEmail: dtoTouragentEmail,
			dtoTouragentPhone: dtoTouragentPhone,
			dtoTouragentPositionId: dtoTouragentPositionId,
			setTouragents: setTouragents,
			setDtoTouragentId: setDtoTouragentId,
			setDtoTouragentPersonId: setDtoTouragentPersonId,
			setDtoTouragentFirstname: setDtoTouragentFirstname,
			setDtoTouragentLastname: setDtoTouragentLastname,
			setDtoTouragentMiddlename: setDtoTouragentMiddlename,
			setDtoTouragentEmail: setDtoTouragentEmail,
			setDtoTouragentPhone: setDtoTouragentPhone,
			setDtoTouragentPositionId: setDtoTouragentPositionId,
			Get200LastTouragents: Get200LastTouragents
		}
	);
	return (
		<window.TouragentsTabContext.Provider value={{
			touragents: touragents,
			dtoTouragentId: dtoTouragentId,
			dtoTouragentPersonId: dtoTouragentPersonId,
			dtoTouragentFirstname: dtoTouragentFirstname,
			dtoTouragentLastname: dtoTouragentLastname,
			dtoTouragentMiddlename: dtoTouragentMiddlename,
			dtoTouragentEmail: dtoTouragentEmail,
			dtoTouragentPhone: dtoTouragentPhone,
			dtoTouragentPositionId: dtoTouragentPositionId,
			setTouragents: setTouragents,
			setDtoTouragentId: setDtoTouragentId,
			setDtoTouragentPersonId: setDtoTouragentPersonId,
			setDtoTouragentFirstname: setDtoTouragentFirstname,
			setDtoTouragentLastname: setDtoTouragentLastname,
			setDtoTouragentMiddlename: setDtoTouragentMiddlename,
			setDtoTouragentEmail: setDtoTouragentEmail,
			setDtoTouragentPhone: setDtoTouragentPhone,
			setDtoTouragentPositionId: setDtoTouragentPositionId,
			Get200LastTouragents: Get200LastTouragents
		}}>
			<div className="framePeople-sub-tab">
				<div className="framePeople-sub-tab-caption" onClick={handleClick}>
					<div className="framePeople-sub-tab-caption-name">Турагенти</div>
				</div>
				{
					isTouragentsSubTabContentVisible === true && <TouragentsSubTabContent />
				}
			</div>
		</window.TouragentsTabContext.Provider>
	);
}