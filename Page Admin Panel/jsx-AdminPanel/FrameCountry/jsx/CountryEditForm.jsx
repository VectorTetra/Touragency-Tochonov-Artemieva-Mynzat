function CountryEditForm(props) {
	const handleSubmit = (event) => {
		event.preventDefault();
		const countryName = event.target.elements.countryNameInput.value;
		const urlFlag = event.target.elements.urlFlagInput.value;
		let id = event.target.elements.countryIdInput.value;
		id = Number(id); // перетворюємо id в число
		let request = JSON.stringify({
			id: id,
			urlFlag: urlFlag,
			countryName: countryName
		});
		if(id === 0) 
		{
			$.ajax({
				url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
				method: 'POST',
				contentType: "application/json",
				data: request,
				success: function(data) {
					setCountries(data);
					setQuantity(data.length);
					console.log(data);
				},
				error: function(error) {
					console.error('Помилка при отриманні даних', error);
				}
			});
		}
		else
		{
			$.ajax({
				url: 'https://26.162.95.213:7098/api/Country', // Замініть на ваш URL API
				method: 'PUT',
				contentType: "application/json",
				data: request,
				success: function(data) {
					setCountries(data);
					setQuantity(data.length);
					console.log(data);
				},
				error: function(error) {
					console.error('Помилка при отриманні даних', error);
				}
			});
		}
		
	};
	return (
		<form name="countryEditForm" id="countryEditForm" style={{ border: '1px solid black', borderRadius: '5px' }} onSubmit={handleSubmit}>
			<input type="hidden" name="countryIdInput" value={0}/>
			<div className="EditFormRow">
				<label htmlFor="countryNameInput">Назва країни:</label>
				<input className="EditFormInput" name="countryNameInput" required />
			</div>
			<div className="EditFormRow">
				<label htmlFor="urlFlagInput">URL до зображення прапора країни:</label>
				<input className="EditFormInput" name="urlFlagInput" required />
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<input type="submit" id="userFormSubmit" className="form-savebutton" value="Зберегти"></input>
				<input type="reset" id="userFormReset" className="form-clearbutton" value="Очистити"></input>
			</div>
		</form>

	);
};