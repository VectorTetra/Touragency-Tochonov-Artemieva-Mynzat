function UserGreetings(props){
	return(
		<div id="userGreetings">		
			<span>Вітаємо, {props.userName}!</span>	
			<span>{props.userEmail}</span>	
		</div>
	)
}