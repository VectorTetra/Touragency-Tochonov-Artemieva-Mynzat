// Використання контексту для передачі даних між компонентами без 
// прямого виклику методів батьківського компонента в дочірній компоненті
// Це дозволить уникнути props-drilling
import { AdminPanelTabContext } from "./AdminPanelTabContext.js";
function AdminPanel (props) {
	function AdminPanel(props) {
		return (
			<AdminPanelTabContext.Provider
				value={{
					"tabs": props.tabs,
					"activeTab": props.tabs[0],
					"isDropdownListVisible": false,
				}}
			>
				<div id="adminPanel">
					{/* {
						console.log("AdminPanelTabContext: ", AdminPanelTabContext)
					} */}
					<AdminPanelTabMenu />
					<AdminPanelTabContainer />
				</div>
			</AdminPanelTabContext.Provider>
		);
	}
}