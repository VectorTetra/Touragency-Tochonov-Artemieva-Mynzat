import { useContext } from 'react';
import {TabContext} from './AdminPanel.jsx';
function AdminPanelTabContainer(props) {
	const {AdminPanelTabContainerTabContext, setAdminPanelTabContainerTabContext} = useContext(TabContext);
	return (
		<div id="adminPanelTabContainer">
			<img src={AdminPanelTabContainerTabContext.tabIconUrl} alt={AdminPanelTabContainerTabContext.name} className="tabContainerImg" />
			<div className="tabContainerCaption">{AdminPanelTabContainerTabContext.name}</div>
		</div>
	);
}