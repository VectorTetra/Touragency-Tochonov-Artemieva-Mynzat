
// function FrameCountry(props){
// 	const [quantity, setQuantity] = React.useState(props.tab.countries.length);
// 	const [countries, setCountries] = React.useState(props.tab.countries);

// 	return (
// 		<div id="frameCountry">
// 			<FrameCountryHeader quantity={quantity} />
// 			<CountryEditForm />
// 			<CountrySearchBar tab={props.tab} setQuantity={setQuantity} setCountries={setCountries} />
// 			<CountryList countries={countries} />
// 		</div>
// 	);
// };
function FrameCountry(props){
    const [countries, setCountries] = React.useState([]);
    const [dtoId, setDtoId] = React.useState(0);
    const [dtoName, setDtoName] = React.useState('');
    const [inputName, setInputName] = React.useState('');
    const [dtoFlagUrl, setDtoFlagUrl] = React.useState('');
    const [dtoSettlementIds, setDtoSettlementIds] = React.useState([]);
	const GetAll = () => 
	{
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetAll' },
			success: function(data) {
				setCountries(data);
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
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
			success: function(data) {
				setCountries(data);
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
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
			success: function(data) {
				setCountries(data);
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
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
			success: function(data) {
				setCountries(data);
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
			}
		});
	}
	const PostCountry = () =>{
		let request = JSON.stringify({
			Id: dtoId,
			FlagUrl: dtoFlagUrl,
			Name: dtoName,
			SettlementIds: dtoSettlementIds
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
			}
		});
	}
	const PutCountry = () =>
	{
		$.ajax({
			url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
			method: 'GET',
			contentType: "application/json",
			data: { SearchParameter: 'GetById', Id: dtoId },
			success: function(data) {
				setDtoSettlementIds(data.SettlementIds);
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
			}
		});
		let request = JSON.stringify({
			Id: dtoId,
			FlagUrl: dtoFlagUrl,
			Name: dtoName,
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
		inputName: inputName,
		setInputName: setInputName,
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
			inputName: inputName,
			setInputName: setInputName,
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
