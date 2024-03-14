// Використання контексту для передачі даних між компонентами без 
// прямого виклику методів батьківського компонента в дочірній компоненті
// Це дозволить уникнути props-drilling
import { createContext } from "react";

function AdminPanel (props) {
	export const TabContext = createContext(
		{
			"tabs":props.tabs, 
			"activeTab":props.tabs[0],
			"isDropdownListVisible":false
		});

	return (
		<div id="adminPanel">
			<TabContext.Provider value={{
			"tabs":props.tabs, 
			"activeTab":props.tabs[0],
			"isDropdownListVisible":false
			}}>
				<AdminPanelTabMenu/>
				<AdminPanelTabContainer/>
			</TabContext.Provider>
		</div>
	);
}