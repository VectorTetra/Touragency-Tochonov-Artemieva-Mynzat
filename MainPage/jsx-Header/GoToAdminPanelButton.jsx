function GoToAdminPanelButton(props){
	const GoToCabinet = () => {
		window.location.href = "../Page Admin Panel/AdminPanel.html";
	};
	return(
		<button id="goToAdminPanelButton" onClick={GoToCabinet}>
			<img className="goToAdminPanelButtonIcon" src={props.icon.url}/>			
			<span className="goToAdminPanelButtonCaption">{props.text}</span>	
		</button>
	)
}