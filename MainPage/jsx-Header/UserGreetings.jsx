function UserGreetings(props){
	return(
		<div id="userGreetings">		
			<span>Вітаємо, {props.userData.clientTouristNickname === null ? props.userData.touragencyEmployeeLogin : props.userData.clientTouristNickname}!</span>
		</div>
	)
}