import {TabContext} from './AdminPanel.jsx';
function DropdownItem(props){
	const {DropdownItemTabContext, setDropdownItemTabContext} = useContext(TabContext);
	function handleClick() {
		setDropdownItemTabContext(
			{...DropdownItemTabContext,
			"activeTab":{
				"name": props.name,
				"tabIconUrl": props.iconSrc
			},
			"isDropdownListVisible": false})
	}
	return(
		<div className="dropdownItem" onClick={handleClick}>
			<img src={props.iconSrc} alt={props.name} className="dropdownItemIcon" />
			<div className="dropdownItemName">{props.name}</div>
		</div>
	)
}