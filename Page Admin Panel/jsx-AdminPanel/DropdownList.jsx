class DropdownList extends React.Component {
	constructor(props) {
		super(props);
		this.sendDataToDropdownCaption = this.sendDataToDropdownCaption.bind(this);
		this.state = {isVisible: this.props.isVisible};
		console.log("DropdownList",this.props);
		console.log("DropdownList",this.state);
	}
	sendDataToDropdownCaption(TabInfo) {
		this.props.sendDataToDropdownCaptionComponent(TabInfo);
	}
	render() {
		return (
			<div id="dropdownList" style={{ "display": this.state.isVisible ? 'relative' : 'none' }}>
				{this.props.tabs.map(it => (
					<DropdownItem iconSrc={it.tabIconUrl} name={it.name} sendDataToDropdownListComponent={this.sendDataToDropdownCaption}/>
				))}
			</div>
		);
	}
}
