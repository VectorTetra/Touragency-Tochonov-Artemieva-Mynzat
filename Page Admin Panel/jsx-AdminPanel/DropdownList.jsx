class DropdownList extends React.Component {
	constructor(props) {
		super(props);
		this.sendDataToDropdownCaption = this.sendDataToDropdownCaption.bind(this);
		// this.state = {isVisible: this.props.isVisible};
		console.log("DropdownList",this.props);
		console.log("DropdownList",this.state);
	}
	sendDataToDropdownCaption(TabInfo) {
		this.props.sendDataToDropdownCaptionComponent(TabInfo);
	}
	render() {
		return (
			<div id="dropdownList" >
				{this.props.tabs.map(it => (
					(this.props.currentTab.name === it.name) ? null :
					<DropdownItem iconSrc={it.tabIconUrl} name={it.name} 
					sendDataToDropdownListComponent={this.sendDataToDropdownCaption}/>
				))}
			</div>
		);
	}
}
