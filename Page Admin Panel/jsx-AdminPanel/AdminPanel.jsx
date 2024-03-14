// Використання контексту для передачі даних між компонентами без 
// прямого виклику методів батьківського компонента в дочірній компоненті
// Це дозволить уникнути props-drilling
import { AdminPanelTabContext } from "./AdminPanelTabContext";
function AdminPanel (props) {
	return (
		<div id="adminPanel">
			<AdminPanelTabContext.Provider value={{
			"tabs":props.tabs, 
			"activeTab":props.tabs[0],
			"isDropdownListVisible":false
			}}>
				<AdminPanelTabMenu/>
				<AdminPanelTabContainer/>
			</AdminPanelTabContext.Provider>
		</div>
	);
}