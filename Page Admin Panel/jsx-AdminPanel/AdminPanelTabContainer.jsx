import React, { Suspense } from 'react';
class AdminPanelTabContainer extends React.Component {
	constructor(props) 
	{
		super(props);
		this.state = {name: this.props.tabs[0].name, tabIconUrl: this.props.tabs[0].tabIconUrl};
	}
	render() {
		// Знайти вкладку "Країни"
		let countryTab = this.props.tabs.find(el => el.name === "Країни");

		return (
			<Suspense fallback={<Loading />}>
				<div id="adminPanelTabContainer">
					{
						(this.state.name === "Країни") ? (
							// Передайте його як проп в FrameCountry
							<FrameCountry tab={countryTab} />
						) : null
					}
				</div>
        	</Suspense>
			
		);
	}
}
