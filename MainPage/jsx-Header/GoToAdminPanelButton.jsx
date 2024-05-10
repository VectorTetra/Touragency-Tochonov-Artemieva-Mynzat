function GoToAdminPanelButton(props){
	return(
		<button id="goToAdminPanelButton">
			<img className="goToAdminPanelButtonIcon" src={props.icon.url}/>			
			<span className="goToAdminPanelButtonCaption">{props.text}</span>	
		</button>
	)
}