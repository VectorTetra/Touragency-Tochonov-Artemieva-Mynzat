function HotelEditForm(props) {
	console.log(props.tab.Food);
	return (

		<form name="HotelEditForm" id="HotelEditForm" style={{ border: '2px solid navy', borderRadius: '5px', }}>
			<div className="hotelEditFormRow">
				<label htmlFor="HotelName">Назва готелю:</label>
				<input name="HotelNameInput" required />
			</div>
			<div className="hotelEditFormRow">
				<div className="inputWrapper">
					<label htmlFor="CountryName" style={{ marginRight: '30px' }}>Країна:</label>
					<input style={{ width: '420px', marginLeft: '70px'}} required />
				</div>
				<div className="inputWrapper">
					<label htmlFor="CityName" style={{ marginRight: '30px', marginLeft: '60px' }}>Місто:</label>
					<input style={{ width: '420px' }} required />
				</div>
			</div>
			<div className="hotelEditFormRow">
				<label htmlFor="Descriptions">Опис готелю:</label>
				<textarea className="countryEditFormInput" name="hotelDescriptionInput" id="hotelDescription" required />
			</div>
			<div className="hotelEditFormRow">
				<label htmlFor="ImageUrl">Фото готелю:</label>
				<input style={{ width: '1017px', marginLeft:'25px'}} name="urlImageInput" required />
			</div>

			<div className="service">
				<label className="toggle-label"   for="toggle" class="toggle-label">Додати додаткові послуги</label>
				<input type="checkbox" id="toggle" class="toggle-checkbox" />
				<div className="container">
					<div className="container1">
						<div className="block">
							<div className="other" >Харчування</div>
							{
								props.tab.Food.map(item =>
									<div className="otherService">
										<input type="checkbox" class="Food"/>
										<label style={{ marginLeft: '10px'}}>{item}</label><br />
									</div>
								)
							}
						</div>

						<div className="block">
							<div className="other">Послуги</div>
							{
								props.tab.Services.map(item =>
									<div className="otherService">
										<input type="checkbox" class="Services"/>
										<label style={{ marginLeft: '10px'}}>{item}</label><br />
									</div>
								)
							}
						</div>

						<div className="block">
							<div className="other">Ліжка</div>
							{
								props.tab.Beds.map(item =>
									<div className="otherService">
										<input type="checkbox" class="Beds"/>
										<label style={{ marginLeft: '10px'}}>{item}</label><br />
									</div>
								)
							}
						</div>
					</div>
				</div>
			</div>
			
			<div className="countryEditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<a id="userFormSubmit" className="form-savebutton">Зберегти</a>
				<a id="userFormReset" className="form-clearbutton">Очистити</a>
			</div>
		</form>

	);
};