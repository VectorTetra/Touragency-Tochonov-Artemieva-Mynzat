function LoginButton(props){
	return(
		<button id="loginButton">
			<img className="loginButtonIcon" src={props.icon.url}/>
			<span className="loginButtonCaption">{props.text}</span>			
		</button>
	)
}