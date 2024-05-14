function HotelEditForm(props) {
	console.log(props.tab.Food);
	return (

		<form name="HotelEditForm" id="HotelEditForm" style={{ border: '2px solid navy', borderRadius: '5px', }}>
			<div className="EditFormRow">
				<label htmlFor="HotelName">Назва готелю:</label>
				<input className="EditFormInput" name="HotelNameInput" required />
			</div>
			<div className="EditFormRow">
				<div className="inputWrapper">
					<label htmlFor="CountryName">Країна:</label>
					{/* <input style={{ width: '420px', marginLeft: '70px'}} required /> */}
					<select className="EditFormInput" style={{maxWidth:"65vw"}} name="countryId" id="">
						<option value="1">Україна</option>
						<option value="2">Польща</option>
						<option value="3">Чехія</option>
					</select>

				</div>
				<div className="inputWrapper">
					<label htmlFor="CityName">Місто:</label>
					{/* <input style={{ width: '420px' }} required /> */}
					<select className="EditFormInput" style={{maxWidth:"65vw"}} name="cityId" id="">
						<option value="1">Львів</option>
						<option value="2">Київ</option>
						<option value="3">Одеса</option>
					</select>
				</div>
			</div>
			<div className="EditFormRow">
				<label htmlFor="Descriptions">Опис готелю:</label>
				<textarea className="hotelEditFormTextArea" name="hotelDescriptionInput" id="hotelDescription" required />
			</div>
			<div className="EditFormRow">
				<HotelImageInput/>
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