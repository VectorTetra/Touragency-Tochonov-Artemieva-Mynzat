class AdminPanelTabContainer extends React.Component {
	constructor(props) 
	{
		super(props);
		this.state = {name: this.props.tabs[0].name, tabIconUrl: this.props.tabs[0].tabIconUrl};
	}
	render() {
		return (
			<div id="adminPanelTabContainer">
				{
					(this.state.name === "Країни") ? <FrameCountry />: null
				}
			</div>
		);
	}
}