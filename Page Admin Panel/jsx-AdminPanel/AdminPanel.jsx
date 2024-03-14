// Використання контексту для передачі даних між компонентами без 
// прямого виклику методів батьківського компонента в дочірній компоненті
// Це дозволить уникнути props-drilling
import React, { useContext } from "react";
import { AdminPanelTabContext } from "./AdminPanelTabContext.js";
function AdminPanel (props) {
	const {AdminPanelContext, setAdminPanelContext} = useContext(AdminPanelTabContext);
	return (
		<div id="adminPanel">
			{
				console.log("AdminPanelTabContext: ", AdminPanelTabContext)
			}
			<AdminPanelContext.Provider value={{
			"tabs":props.tabs, 
			"activeTab":props.tabs[0],
			"isDropdownListVisible":false
			}}>
				<AdminPanelTabMenu/>
				<AdminPanelTabContainer/>
			</AdminPanelContext.Provider>
		</div>
	);
}