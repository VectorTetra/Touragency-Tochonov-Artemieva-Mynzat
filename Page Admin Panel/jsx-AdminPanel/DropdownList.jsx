import React, { useContext } from 'react';
import { AdminPanelTabContext } from "./AdminPanelTabContext.js";
function DropdownList(props) {
	const {DropdownListTabContext, setDropdownListTabContext} = useContext(AdminPanelTabContext);
	return (
		<div id="dropdownList">
			{DropdownListTabContext.tabs.map((it) =>
				DropdownListTabContext.activeTab.name === it.name ? null : (
					<DropdownItem
						iconSrc={it.tabIconUrl}
						name={it.name}
					/>
				)
			)}
		</div>
	);
}
