
class AdminPanelTabContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: this.props.tabs[0].name, tabIconUrl: this.props.tabs[0].tabIconUrl };
	}

	render() {
		let myTab = this.props.tabs.find(el => el.name === this.state.name);

		return (
			<div id="adminPanelTabContainer">
				{(this.state.name === "Країни") ? (<FrameCountry tab={myTab} />) : null}
				{(this.state.name === "Готелі") ? (<FrameHotel tab={myTab} />) : null}
				{(this.state.name === "Відгуки") ? (<FrameFeedback tab={myTab} />) : null}
				{(this.state.name === "Міста") ? (<FrameCity tab={countryTab} />) : null}
			</div>

		);
	}
}
