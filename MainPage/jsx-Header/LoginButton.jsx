function LoginButton(props){
	function goToAuthPage(){
		window.location.href = "../Page Authentication/Authentication.html";
	}
	return(
		<button id="loginButton" onClick={goToAuthPage}>
			<img className="loginButtonIcon" src={props.icon.url}/>
			<span className="loginButtonCaption">{props.text}</span>			
		</button>
	)
}