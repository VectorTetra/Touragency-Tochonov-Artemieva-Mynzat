function LogoutButton(props){
	return(
		<button id="logoutButton">
			<img src={props.icon.url} width={props.icon.width} height={props.icon.height}/>			
			<span style={{padding:"0 20px"}}>{props.text}</span>	
		</button>
	)
}