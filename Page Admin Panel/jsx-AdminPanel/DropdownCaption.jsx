// Ми зможемо використовувати цей TabContext , щоб використовувати його змінні замість state
// Для цього використаємо useContext
import React, { useContext } from 'react';
import AdminPanelTabContext  from "./AdminPanelTabContext.js";
import DropdownList from "./DropdownList.jsx";
function DropdownCaption(props){

	const [DropdownCaptionTabContext, setDropdownCaptionTabContext] = useContext(AdminPanelTabContext);
	function handleClick() {
		setDropdownCaptionTabContext({...DropdownCaptionTabContext, "isDropdownListVisible": !DropdownCaptionTabContext.isDropdownListVisible})
	}
	return (
		<div>
			<div className="dropdownCaption" onClick={handleClick}>
				<img src={DropdownCaptionTabContext.activeTab.tabIconUrl}  className="dropdownCaptionIcon" />
				<div className="dropdownCaptionName">{DropdownCaptionTabContext.activeTab.name}</div>
			</div>
			{
				(DropdownCaptionTabContext.isDropdownListVisible === true) ?
				<DropdownList />
				: null
			}
		</div>
	);
};
export default DropdownCaption;