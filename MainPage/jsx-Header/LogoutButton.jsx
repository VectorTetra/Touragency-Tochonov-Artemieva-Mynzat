function LogoutButton(props){
	const ExitFromCabinet = () => {
		if(confirm("Ви впевнені, що хочете вийти?")){
			localStorage.removeItem('userData');
			props.setUserDataToNull(null);
		}
	};
	return(
		<button id="logoutButton" onClick={ExitFromCabinet}>
			<img className="logoutButtonIcon" src={props.icon.url}/>			
			<span className="logoutButtonCaption">{props.text}</span>	
		</button>
	)
}