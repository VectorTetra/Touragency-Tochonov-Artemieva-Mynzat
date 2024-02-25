function MainPageHeader(props){
	const [isLogined, setIsLogined] = React.useState(false);
	React.useEffect(() => {
		console.log("MainPageHeaderProps",props.headerData.touragencyLogo);
	  },[]);
	return(
		<div id="mainPageHeader">
			<MainPageHeaderLogo logoHeight={props.headerData.touragencyLogo.height}
			logoWidth={props.headerData.touragencyLogo.width}
			logoUrl={props.headerData.touragencyLogo.url}/>
			<MainPageHeaderTouragencySign agencyName={props.headerData.touragencySign.agencyName}
			agencySlogan={props.headerData.touragencySign.agencySlogan}/>
			<MainPageHeaderContactList workSchedule={props.headerData.contactList.workSchedule}
			phones={props.headerData.contactList.phones}
			networks={props.headerData.contactList.networks}
			/>
			{
				(isLogined === true ? 
					<div className="authorizWrapper">
						<UserGreetings userName={props.headerData.userData.name}
						 userEmail={props.headerData.userData.email}
						 />
						<LogoutButton icon={props.headerData.logoutIcon} text="Вийти" />
					</div>
					:
					<div className="authorizWrapper">
						<LoginButton icon={props.headerData.loginIcon} text="Увійти" />
					</div>
				)
				
			}
			
		</div>
	)
}