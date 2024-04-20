class AdminPanelTabContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.tabs[0].name, tabIconUrl: this.props.tabs[0].tabIconUrl };
	}
	render() {
		// Знайти вкладку "Країни"
		let countryTab = this.props.tabs.find(el => el.name === "Країни");

		return (
			<div id="adminPanelTabContainer">
				{
					(this.state.name === "Країни") && <FrameCountry tab={countryTab} />
				}
				{
					(this.state.name === "Міста") && <FrameCity tab={countryTab} />
				}
				{
					(this.state.name === "Люди") && <FramePeople />
				}
			</div>

		);
	}
}
