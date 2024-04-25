
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
    const [quantity, setQuantity] = React.useState(0);
    const [countries, setCountries] = React.useState([]);

    React.useEffect(() => {
        $.ajax({
			url: 'https://26.162.95.213:22546/api/Country', // Замініть на ваш URL API
			data: { SearchParameter: 'GetAll' },
			success: function(data) {
				setCountries(data);
				setQuantity(data.length);
				console.log(data);
			},
			error: function(error) {
				console.error('Помилка при отриманні даних', error);
			}
		});
    }, []); // Пустий масив означає, що цей ефект буде виконуватися тільки при монтуванні компонента

    return (
        <div id="frameCountry">
            <FrameCountryHeader quantity={quantity} />
            <CountryEditForm />
            {/* <CountrySearchBar tab={props.tab} setQuantity={setQuantity} setCountries={setCountries} />
            <CountryList countries={countries} /> */}
        </div>
    );
};
