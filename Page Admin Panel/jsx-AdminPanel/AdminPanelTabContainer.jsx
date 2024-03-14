import React, { useContext } from 'react';
import { AdminPanelTabContext } from "./AdminPanelTabContext.js";
function AdminPanelTabContainer(props) {
	const {AdminPanelTabContainerTabContext, setAdminPanelTabContainerTabContext} = useContext(AdminPanelTabContext);
	return (
		<div id="adminPanelTabContainer">
			<img src={AdminPanelTabContainerTabContext.tabIconUrl} alt={AdminPanelTabContainerTabContext.name} className="tabContainerImg" />
			<div className="tabContainerCaption">{AdminPanelTabContainerTabContext.name}</div>
		</div>
	);
}