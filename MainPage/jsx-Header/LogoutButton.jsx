function LogoutButton(props){
	return(
		<button id="logoutButton">
			<img className="logoutButtonIcon" src={props.icon.url}/>			
			<span className="logoutButtonCaption">{props.text}</span>	
		</button>
	)
}