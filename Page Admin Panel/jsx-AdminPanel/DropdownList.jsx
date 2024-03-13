class DropdownList extends React.Component {
	constructor(props) {
		super(props);
		this.sendDataToDropdownCaption = this.sendDataToDropdownCaption.bind(this);
		console.log("DropdownList",this.props);
	}
	sendDataToDropdownCaption(TabInfo) {
		this.props.sendDataToDropdownCaptionComponent(TabInfo);
	}
	render() {
		return (
			<div id="dropdownList" style={{ "display": this.props.isVisible ? 'relative' : 'none' }}>
				{this.props.tabs.map(it => (
					<DropdownItem iconSrc={it.tabIconUrl} name={it.name} sendDataToDropdownListComponent={this.sendDataToDropdownCaption}/>
				))}
			</div>
		);
	}
}
