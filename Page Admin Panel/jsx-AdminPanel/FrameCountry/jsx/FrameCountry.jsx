function FrameCountry(props){
    const [countries, setCountries] = React.useState([]);
    const [dtoId, setDtoId] = React.useState(0);
    const [dtoName, setDtoName] = React.useState('');
    const [dtoFlagUrl, setDtoFlagUrl] = React.useState('');
    const [dtoSettlementIds, setDtoSettlementIds] = React.useState([]);
	const GetAll = () => 
	{
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			statusCode: {
				200: function(data) {
					setCountries(data);
				},
				204: function() {
					setCountries([]);
				}
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
		
	}
	const Get200Last = () => 
	{
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'Get200Last' },
			statusCode: {
				200: function(data) {
					setCountries(data);
				},
				204: function() {
					setCountries([]);
				}
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const GetById = (id) => 
	{
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetById', Id: id },
			statusCode: {
				200: function(data) {
					setCountries(data);
				},
				204: function() {
					setCountries([]);
				}
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const GetByName = (inputName) => 
	{
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetByName', Name: inputName },
			statusCode: {
				200: function(data) {
					setCountries(data);
				},
				204: function() {
					setCountries([]);
				}
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const PostCountry = (inputName,inputFlagUrl) =>{
		let request = JSON.stringify({
			Id: dtoId,
			FlagUrl: inputFlagUrl,
			Name: inputName,
			SettlementIds: []
		});
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
			method: 'POST',
			contentType: "application/json",
			data: request,
			success: function(data) {
				Get200Last();
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	const PutCountry = (inputName,inputFlagUrl) =>{
		let request = JSON.stringify({
			Id: dtoId,
			FlagUrl: inputFlagUrl,
			Name: inputName,
			SettlementIds: dtoSettlementIds
		});
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
			method: 'PUT',
			contentType: "application/json",
			data: request,
			success: function(data) {
				Get200Last();
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
				alert(error.responseText);
			}
		});
	}
	window.FrameCountryContext = React.createContext({
		GetAll: GetAll,
		Get200Last: Get200Last,
		GetById: GetById,
		GetByName: GetByName,
		PostCountry: PostCountry,
		PutCountry: PutCountry,
		setDtoId: setDtoId,
		setDtoName: setDtoName,
		setDtoFlagUrl: setDtoFlagUrl,
		setDtoSettlementIds: setDtoSettlementIds,
		setCountries: setCountries,
		dtoId: dtoId,
		dtoName: dtoName,
		dtoFlagUrl: dtoFlagUrl,
		dtoSettlementIds: dtoSettlementIds,
		countries: countries
	  });
    React.useEffect(() => {
        Get200Last();
    }, []); // Пустий масив означає, що цей ефект буде виконуватися тільки при монтуванні компонента

    return (
		<window.FrameCountryContext.Provider value={{ 
			GetAll: GetAll,
			Get200Last: Get200Last,
			GetById: GetById,
			GetByName: GetByName,
			PostCountry: PostCountry,
			PutCountry: PutCountry,
			setDtoId: setDtoId,
			setDtoName: setDtoName,
			setDtoFlagUrl: setDtoFlagUrl,
			setDtoSettlementIds: setDtoSettlementIds,
			setCountries: setCountries,
			dtoId: dtoId,
			dtoName: dtoName,
			dtoFlagUrl: dtoFlagUrl,
			dtoSettlementIds: dtoSettlementIds,
			countries: countries
		}}>
			<div id="frameCountry">
				<FrameCountryHeader/>
				<CountryEditForm />
				<CountrySearchBar />
				<CountryList countries={countries} />
			</div>
		</window.FrameCountryContext.Provider>
    );
};
