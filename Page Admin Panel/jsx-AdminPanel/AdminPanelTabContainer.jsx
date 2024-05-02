class AdminPanelTabContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.tabs[0].name, tabIconUrl: this.props.tabs[0].tabIconUrl };
	}
	render() {
		// Знайти вкладку "Країни"
		let countryTab = this.props.tabs.find(el => el.name === "Країни");
		let newsTab = this.props.tabs.find(el => el.name === "Новини");
		return (
			<div id="adminPanelTabContainer">
				{
					(this.state.name === "Країни") ? (
						// Передайте його як проп в FrameCountry
							<FrameCountry tab={countryTab} />
					) : 
					(this.state.name === "Новини") ? (
						// Передайте його як проп в FrameNews
							<FrameNews tab={newsTab}/>
					) : null
				}
			</div>

		);
	}
}
