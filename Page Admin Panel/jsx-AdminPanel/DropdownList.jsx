import {TabContext} from './AdminPanel.jsx';
function DropdownList(props) {
	const {DropdownListTabContext, setDropdownListTabContext} = useContext(TabContext);
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
