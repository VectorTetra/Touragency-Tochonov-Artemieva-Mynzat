class AdminPanelTabContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.tabs[0].name, tabIconUrl: this.props.tabs[0].tabIconUrl };
	}
	render() {
		// Знайти вкладку "Країни"
		//let countryTab = this.props.tabs.find(el => el.name === "Країни");
		// Знайти вкладку "Люди"
		//let peopleTab = this.props.tabs.find(el => el.name === "Люди");

		let myTab = this.props.tabs.find(el => el.name === this.state.name);
		return (
			<div id="adminPanelTabContainer">
				{
					(this.state.name === "Країни") && <FrameCountry tab={countryTab} />
				}
				{
					(this.state.name === "Міста") && <FrameCity tab={countryTab} />
				}
				{
					(this.state.name === "Люди") && <FramePeople tab={peopleTab}/>
				}
				{	
					(this.state.name === "Готелі") && <FrameHotel tab={myTab} />
				}
				{
					(this.state.name === "Відгуки") && <FrameFeedback tab={myTab} />
				}
			</div>

		);
	}
}
