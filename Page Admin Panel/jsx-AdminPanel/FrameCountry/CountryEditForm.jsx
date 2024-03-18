function CountryEditForm(props){
	// const [isDropdownListVisible, setDropdownListVisible] = React.useState(false);
	// const [currentTab, setCurrentTab] = React.useState(props.tabs[0]);

	// function sendDataToAdminPanelTabMenu(TabInfo) {
	// 	setCurrentTab(TabInfo);
	// 	setDropdownListVisible(false);
	// 	props.sendDataToAdminPanelTabMenuComponent(TabInfo);
	// 	console.log("currentTab: ", TabInfo);
	// }
	// function handleClick() {
	// 	setDropdownListVisible(!isDropdownListVisible);
	// }
	return (
		<div id="countryEditForm">
			<form name="countryEditForm" style={{border: '1px solid black', borderRadius: '5px'}}>
				<input type="hidden" name="Id" value="0" />
				<table style={{width: '100%'}}>
					<tr>
						<td>
							<div style={{padding: '0 15px 0 15px'}}>
								<label htmlFor="firstName">Назва країни:</label>
								<input className="form-control" name="firstName" required/>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div style={{padding: '0 15px 0 15px'}}>
								<label htmlFor="login">URL до зображення прапора країни:</label>
								<input className="form-control" name="login" required/>
							</div>
						</td>
					</tr>
				</table>
				<div className="panel-body" style={{margin: '15px 0 15px 15px'}}>
					<a id="userFormSubmit" className="btn btn-primary">Зберегти</a>
					<a id="userFormReset" className="btn btn-primary">Очистити</a>
				</div>
			</form>
		</div>
	);	
};