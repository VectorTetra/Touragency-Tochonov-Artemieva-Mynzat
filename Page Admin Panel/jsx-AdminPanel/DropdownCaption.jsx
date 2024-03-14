// Ми зможемо використовувати цей TabContext , щоб використовувати його змінні замість state
// Для цього використаємо useContext
import {TabContext} from './AdminPanel.jsx';
function DropdownCaption(props){

	const {DropdownCaptionTabContext, setDropdownCaptionTabContext} = useContext(TabContext);
	function handleClick() {
		setDropdownCaptionTabContext({...DropdownCaptionTabContext, isDropdownListVisible: !DropdownCaptionTabContext.isDropdownListVisible})
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