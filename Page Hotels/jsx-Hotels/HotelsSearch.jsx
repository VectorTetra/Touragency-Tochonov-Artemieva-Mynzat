function HotelsSearch(props) {
    const [inputValue, setInputValue] = React.useState("");
    const [tours, setTours] = React.useState(props.tours);

	React.useEffect(() => {
		props.setTours(tours);
	}, [tours]);

	const handleInput = () => {
		if (inputValue === "" || inputValue === undefined || inputValue === null) {
			GetAllTourNames();
			return;
		}
		else{
			GetTourNames(inputValue);
		}
		
	};
	const GetAllTourNames = async () => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7099/api/TourName', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetAll' }
                ,
                statusCode: {
                    200: function (data) {
                        const last11Tours = data.slice(-10); // Отримуємо останні 10 елементів
                        setTours(last11Tours);
                    },
                    204: function () {
                        setTours([]);
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });
            console.log("GetTourNames success data: ", response);

        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
                
    };
	const GetTourNames = async (tourName) => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7099/api/TourName', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetByCompositeSearch', Name: tourName },
                statusCode: {
                    200: function (data) {
                        setTours(data);
                    },
                    204: function () {
                        setTours([]);
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });
            console.log("GetTourNames success data: ", response);

        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
                
    };
	const handleInputChange = (event) => {
		switch (event.target.name) {
			case 'searchBar':
				setInputValue(event.target.value);
				break;
			default:
				break;
		}
	}
	return (
		<div className="search EditFormRow">
			<input className="countryEditFormInput" name="searchBar" 
			value={inputValue} onChange={handleInputChange} placeholder="Введіть назву туру"/>
			<button className="buttonSearchCity" style={{width: "auto", marginTop:"20px"}} onClick={handleInput}>Пошук</button>
		</div>
	);
    
}