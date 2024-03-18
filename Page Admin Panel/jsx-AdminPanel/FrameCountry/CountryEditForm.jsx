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
			<form name="countryEditForm" style="border:1px solid black;border-radius:5px;">
				<input type="hidden" name="Id" value="0" />
				<table style="width:100%;">
					<tr>
						<td>
							<div style="padding:0 15px 0 15px;">
								<label for="firstName">Назва країни:</label>
								<input class="form-control" name="firstName" required/>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div style="padding:0 15px 0 15px;">
								<label for="login">URL до зображення прапора країни:</label>
								<input class="form-control" name="login" required/>
							</div>
						</td>
					</tr>
				</table>
				<div class="panel-body" style="margin:15px 0 15px 15px;">
					<a id="userFormSubmit" class="btn btn-primary">Зберегти</a>
					<a id="userFormReset" class="btn btn-primary">Очистити</a>
				</div>
			</form>
		</div>
	);
};