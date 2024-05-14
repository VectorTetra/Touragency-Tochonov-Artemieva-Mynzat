function UserGreetings(props){
	React.useEffect(() => {
		console.log(props.userData);
	},[]);
	return(
		<div id="userGreetings">		
			<span>Вітаємо, {(props.userData.clientTouristNickname === null || props.userData.clientTouristNickname === undefined)  ? props.userData.touragencyEmployeeLogin : props.userData.clientTouristNickname}!</span>
		</div>
	)
}