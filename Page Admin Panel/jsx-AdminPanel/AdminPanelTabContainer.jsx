function AdminPanelTabContainer (props) {
	return (
		<div id="adminPanelTabContainer">
			<img src={state.tabIconUrl} alt={state.name} className="tabContainerImg"/>
			<div className="tabContainerCaption">{state.name}</div>
		</div>
	);
}